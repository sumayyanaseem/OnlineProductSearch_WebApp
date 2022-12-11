
import ProductCard from './ProductCard';
import './index.css'
import { useEffect } from 'react';
import SearchComponent from '../../components/SearchComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { findProductsThunk } from '../../services/home-page-thunks';
import { findCategoriesThunk } from '../../services/categories.thunks';
import * as homePageService from '../../services/home-page-service';
import SelectComponent from '../../components/SelectComponent';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import ReactLoading from 'react-loading';

function HomeScreen() {
    const { products, loading } = useSelector((state) => state.products);
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const { currentUser } = useSelector((state) => state.user);
    const [genericProductsForSellers, setGenericProductsForSellers] = useState([]);

    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();
        const controllerSignal = controller.signal;
        const productsQuery = { controllerSignal };
        if (category) {
            productsQuery.categoryName = category;
        }
        if (currentUser?._id) {
            productsQuery.userID = currentUser?._id;
        }
        dispatch(findProductsThunk(productsQuery))
        dispatch(findCategoriesThunk())
        if (currentUser?.role === "Seller") {
            homePageService
                .getAllProducts(null, category)
                .then((response) => {
                    setGenericProductsForSellers(response);
                });
        }
        return () => {
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser, currentUser?._id, category])

    const handleCategorySelection = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
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

                                    <>  {
                                        currentUser?.role === 'Seller' &&
                                        <>
                                            <h3>You don't have any products. Please go to accounts to add products</h3>
                                            <Button className='wd-home-page-add-products-btn' variant="contained" endIcon={<SendIcon />}>
                                                Add products
                                            </Button>
                                        </>
                                    }
                                    </>
                                    :
                                    products.filter(
                                        p => p.title?.includes(filter) || filter === '')
                                        .map(product => <ProductCard key={product.id} product={product} />)

                            }
                        </div>
                    </div>
                    {
                        currentUser?.role === 'Seller' &&
                        <div>
                            <h3>
                                Products from Other Sellers
                            </h3>
                            <div className="wd-mt-40">
                                <div className="row wd-mb-80 wd-home-gallery wd-products-container">
                                    {genericProductsForSellers.map((product) => <ProductCard key={product.id} product={product} />)}
                                </div>
                            </div>
                        </div>
                    }

                </div>
            }

        </>

    );

}

export default HomeScreen;