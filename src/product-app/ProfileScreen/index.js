import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
// import profile from './user.json';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as service from '../../services/user-service.js'
import * as reviewService from '../../services/reviews-service.js'
import Button from '@mui/material/Button';

const ProfileScreen = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [loading, setLoading] = useState(true);


    const [reviewsLoading, setReviewLoading] = useState(true);
    const location = useLocation()
    const name = location.pathname

    const navigate = useNavigate()


    const userName = name.split('/')[2] ?? currentUser.userName;

    const [userProf, setUserProf] = useState({})

    const handleEditProfile = () => {
        navigate('/edit-profile')
    }



    if (loading) {
        if (userName !== currentUser.userName) {
            console.log("in if", userName)
            service.getDetailsByUserName(userName).then((response) => {
                setUserProf(response.data);
                setLoading(false);
            })
        } else {
            setUserProf(currentUser)
            setLoading(false);
        }
    }


    return (
        <>
            {
                loading && <h1>LOADING...</h1>
            }
            {
                !loading &&

                <>
                    <div className='wd-profile-container'>
                        <div className='wd-profile-header'>
                            {/* TODO whats the use of back */}
                            <i className="fa-solid fa-arrow-left-long wd-back"></i>
                            <div>
                                <div className='wd-profile-name'>
                                    {userProf.firstName} {userProf.lastName}
                                </div>
                            </div>
                        </div>
                        <div className='wd-picture-container'>
                            <div>
                                <div className='wd-banner-picture'>
                                    <img src={`/assets/banner.jpeg`} alt="Banner" height="200px" width="100%" />
                                </div>
                                <div className='wd-profile-picture'>
                                    <img src={`${userProf.profImg ?? '/assets/default_dp.jpg'}`} alt="Profile" height="150px" width="150px" />
                                </div>

                            </div>

                            {currentUser.userName === userProf.userName &&


                                <div className='wd-edit-profile-btn-container'>
                                    {
                                        userProf.role === 'Seller' && <Link className='wd-edit-profile-btn' to={`/product/add`}>
                                            Add Product
                                        </Link>
                                    }
                                    {
                                        userProf.role === 'Admin' && <Link className='wd-edit-profile-btn' to="/manage-requests">
                                            Manage Requests
                                        </Link>
                                    }

                                </div>
                            }

                        </div>
                        <div className='wd-profile-handle'>
                            <Button className='wd-profile-edit-profile-btn' onClick={handleEditProfile} variant="outlined" size="medium">
                                Edit profile
                            </Button>
                        </div>
                        <div className='wd-profile-name'>
                            {userProf.firstName} {userProf.lastName}
                        </div>
                        <div className='wd-profile-handle'>
                            {userProf.userName}
                        </div>


                        <div className='wd-profile-bio'>
                            {userProf.bio}
                        </div>
                        <div className='wd-profile-additional-icons-container'>
                            <div className='wd-profile-additional-info-container'>
                                <div className='wd-profile-icon'>
                                    <i className="bi bi-balloon"></i>
                                </div>
                            </div>
                        </div>

                    </div >

                    <div>
                        <h1>REVIEWS</h1>
                    </div>
                </>


            }


        </>



    );

}

export default ProfileScreen;