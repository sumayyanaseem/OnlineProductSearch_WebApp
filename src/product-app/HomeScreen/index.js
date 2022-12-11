
import PropertyCard from './ProductCard';
import './index.css'
import { useEffect } from 'react';
import SearchComponent from '../../components/SearchComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findProductsThunk } from '../../services/home-page-thunks';
import { findCategoriesThunk } from '../../services/categories.thunks';
import SelectComponent from '../../components/SelectComponent';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import ReactLoading from 'react-loading';

function HomeScreen() {
    const { products, loading } = useSelector((state) => state.products);
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findProductsThunk(currentUser?._id ? { userID: currentUser._id } : {}))
        dispatch(findCategoriesThunk())
    }, [])

    const [filter, setFilter] = useState('');

    const [category, setCategory] = useState('')

    const handleCategorySelection = (event) => {
        const selectedCategory = event.target.value;
        const productsQuery = currentUser?._id ? { userID: currentUser._id } : {};
        setCategory(selectedCategory);
        console.log(selectedCategory)
        if (selectedCategory) {
            productsQuery.categoryName = selectedCategory;
            dispatch(findProductsThunk(productsQuery))
        }
    }

    return (
        <>
            {
                categoriesLoading && loading &&
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}

                >      <ReactLoading type="balls" color="#0000FF"
                    height={100} width={50} /></div>

            }

            {
                !loading &&
                <div className='container-fluid wd-container '>
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
                    {
                        currentUser?.role === 'Seller' && <h3>Your Products</h3>
                    }
                    <div className="wd-mt-40">
                        <div className="row wd-mb-80 wd-home-gallery wd-products-container">
                            {
                                products.filter(p => p.title?.includes(filter) || filter === '').length === 0 ?

                                    <>
                                        <h3>You don't have any products. Please go to accounts to add products</h3>
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
                </div>
            }

        </>

    );

}

export default HomeScreen;