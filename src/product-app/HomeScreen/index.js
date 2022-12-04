
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


function HomeScreen() {
    const { products, loading } = useSelector((state) => state.products);
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const profile = useSelector((state) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log("GETTING IT")
        dispatch(findProductsThunk({ userID: profile.id, categoryName: "" }))
        dispatch(findCategoriesThunk())
    }, [])

    const [filter, setFilter] = useState('');

    const [category, setCategory] = useState('')

    const handleCategorySelection = (selectedCategory) => {
        setCategory(selectedCategory);
        console.log(selectedCategory)
        if (selectedCategory) {
            dispatch(findProductsThunk({ userID: profile.id, categoryName: selectedCategory }))
        }
    }

    console.log(loading , products)

    return (
        <>
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
                                />
                            }
                        </div>
                    </div>
                    <div className="wd-mt-40">
                        <div className="row wd-mb-80 wd-home-gallery wd-products-container">
                            {
                                products.filter(p => p.title?.includes(filter) || filter === '').length === 0 ? <h3>sorry no properties found :(</h3> :
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