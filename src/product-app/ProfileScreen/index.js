import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import { useLocation } from 'react-router-dom';
import * as service from '../../services/user-service.js'
import * as reviewService from '../../services/reviews-service.js'
import UserReview from './UserReviewComponent'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonalInformationComponent from "./PersonalInformationComponent";
import OrdersComponent from './OrdersComponent';


const ProfileScreen = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [reviews, setReviews] = useState([])
    const location = useLocation()
    const name = location.pathname
    const userName = name.split('/')[2] ?? currentUser?.userName;

    const [userProf, setUserProf] = useState()
    useEffect(() => {
        if (userName && userName !== currentUser?.userName) {
            service.getDetailsByUserName(userName).then((response) => {
                setUserProf(response.data);
            })
        } else {
            setUserProf(currentUser)
        }

    }, [currentUser, userName])

    useEffect(() => {
        if (userProf?.userName) {
            reviewService.findReviewsByUserName(userProf.userName).then((response) => {

                setReviews(response.data);
            })
        }

    }, [userProf, userProf?.userName])


    const menuItems = [
        {
            title: "Personal Information",
            id: "personal-information",
            icon: <PersonIcon />
        },
        {
            title: "Orders",
            id: "orders",
            icon: <ShoppingBasketIcon />
        },
        {
            title: "Reviews",
            id: "reviews",
            icon: <ReviewsIcon />
        }
    ]

    console.log("location.hash", location.hash)

    const [selectedMenuItem, setSelectedMenuItem] = useState(location.hash ? location.hash.replace('#','') : menuItems[0].id)

    return (
        <>
            <div className="wd-profile-screen-container">
                <div className="wd-profile-screen-account-header">My Account</div>
                <div className="wd-account-details-container">
                    <div className="wd-account-menu-container ">
                        {
                            menuItems.map((menuItem) =>
                                <div
                                    className={selectedMenuItem === menuItem.id
                                        ? `wd-account-menu-item-active`
                                        : "wd-account-menu-item"}
                                    key={menuItem.id}
                                    onClick={() => setSelectedMenuItem(menuItem.id)}>
                                    {menuItem.icon}
                                    <span className="wd-account-menu-item-text">  {menuItem.title}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className="wd-account-details-item-list-container">
                        {
                            selectedMenuItem === "personal-information" && <PersonalInformationComponent userProf={userProf} />
                        }
                        {
                            selectedMenuItem === "orders" && <OrdersComponent userProf={userProf} />
                        }
                        {
                            selectedMenuItem === "reviews" && <UserReview userName={userProf?.userName} />
                        }
                    </div>
                </div>
            </div>
        </>



    );

}

export default ProfileScreen;