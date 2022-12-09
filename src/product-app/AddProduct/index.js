import { Grid, Paper, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectComponent from '../../components/SelectComponent';
import { findCategoriesThunk } from '../../services/categories.thunks';
import { createProductsThunk } from '../../services/home-page-thunks';
import './index.css';

function AddProduct() {
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const { currentUser } = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findCategoriesThunk())
    }, [])

    const [productInput, setProductInput] = useState({})
    const [thumbnail, setThumbnail] = useState({})

    const [productImages, setProductImages] = useState({})

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        const formData = new FormData();
        Object.keys(productInput).forEach((key) => {
            formData.append(key, productInput[key]);
        })
        formData.append("thumbnail", thumbnail, "thumbnail.jpeg")
        for (let i = 0; i < productImages.length; i++) {
            formData.append("images", productImages[i])
        }
        formData.append("username", currentUser.userName)

        dispatch(createProductsThunk(formData));
        // TODO navigate to?
        navigate('/')
    }

    const handleInput = (event) => {
        const name = event.target.name;
        const newValue = event.target.value;
        console.log(name, newValue)
        setProductInput(
            {
                ...productInput,
                [name]: newValue
            }
        );
    };

    const handleThumbnailFileChange = (event) => {
        const file = event.target.files[0];
        setThumbnail(file)
    }

    const handleProductImagesFileChange = (event) => {
        const files = event.target.files;
        setProductImages(files)
    }

    return (
        <div>
            <div className='wd-add-product-container'>
                <div className='wd-add-product-header'> Create Product</div>

                <form onSubmit={handleSubmit}>
                    <Paper style={{ padding: 16 }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    required
                                    name="title"
                                    type="text"
                                    label="Title"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    name="description"
                                    type="text"
                                    label="Description"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="price"
                                    type="number"
                                    label="Price"
                                    onChange={handleInput}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="discountPercentage"
                                    type="number"
                                    label="Discount Percentage"
                                    onChange={handleInput}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="stock"
                                    type="number"
                                    label="Stock"
                                    onChange={handleInput}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="brand"
                                    type="text"
                                    label="Brand"
                                    onChange={handleInput}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                {!categoriesLoading &&
                                    <SelectComponent
                                        selectedValue={productInput.category}
                                        handleSelection={handleInput}
                                        name="category"
                                        values={categories}
                                        label="Category"
                                    />}
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    name="thumbnail"
                                    type="file"
                                    label="Thumbnail"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        accept: "image/png, image/jpeg"
                                    }}
                                    onChange={handleThumbnailFileChange}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    name="images"
                                    type="file"
                                    label="Product Images"
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{
                                        multiple: true,
                                        accept: "image/png, image/jpeg"
                                    }}
                                    onChange={handleProductImagesFileChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <button className='wd-submit-btn'>
                                    Submit
                                </button>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </div>
        </div >
    )
}

export default AddProduct;