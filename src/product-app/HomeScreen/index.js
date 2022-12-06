
import PropertyCard from './PropertyCard';
import './index.css'
import './bootstrap.min.css'
import { useEffect } from 'react';
import NavbarComponent from '../NavbarComponent';
import SearchComponent from '../../components/SearchComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findProductsThunk } from '../../services/home-page-thunks';
import { findCategoriesThunk } from '../../services/categories.thunks';
import SelectComponent from '../../components/SelectComponent';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function HomeScreen() {
    const { products, loading } = useSelector((state) => state.products);
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const { currentUser } = useSelector((state) => state.user);



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findProductsThunk({ userID: currentUser._id, categoryName: "" }))
        dispatch(findCategoriesThunk())
    }, [])

    const [filter, setFilter] = useState('');

    const [category, setCategory] = useState('')

    const handleCategorySelection = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        if (selectedCategory) {
            dispatch(findProductsThunk({ userID: currentUser._id, categoryName: selectedCategory }))
        }
    }

    console.log(loading, products)

    return (
        <>

            {
                currentUser && <h3>welcome {currentUser.userName}</h3>
            }
            {
                categoriesLoading && loading && <h3>loading...</h3>
            }

            {
                !loading &&
                <div className='container-fluid wd-container '>
                    <div>
                        <NavbarComponent />
                    </div>
                    <div className="wd-search-filter">
                        <div className="wd-search">
                            <SearchComponent placeHolder="Search for Products..." onSearch={(res) => { setFilter(res) }} />
                        </div>
                        <div className="wd-filter">
                            {
                                !categoriesLoading &&
                                <SelectComponent
                                    selectedValue={category}
                                    handleSelection={handleCategorySelection}
                                    values={categories}
                                    label="Category"
                                    name="category"
                                />
                            }
                        </div>
                    </div>
                    <div className="wd-mt-40">
                        <div className="row wd-mb-80 wd-home-gallery wd-products-container">
                            {
                                products.filter(p => p.title?.includes(filter) || filter === '').length === 0 ?

                                    <>
                                        <h3>You dont have any products. Please go to accounts to add products</h3>
                                        <Button className='wd-home-page-add-products-btn' variant="contained" endIcon={<SendIcon />}>
                                            Add products
                                        </Button>
                                    </>




                                    :
                                    products.filter(
                                        p => p.title?.includes(filter) || filter === '')
                                        .map(property => <PropertyCard key={property.id} property={property} />)

                            }
                        </div>
                    </div>
                    <div>FOOTER</div>
                </div>
            }

        </>

    );

}

export default HomeScreen;