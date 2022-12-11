import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.css';
import { useLocation } from 'react-router-dom';
import * as service from '../../services/user-service.js'
import UserReview from './UserReviewComponent'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonalInformationComponent from "./PersonalInformationComponent";
import OrdersComponent from './OrdersComponent';

const ProfileScreen = () => {

    const { currentUser } = useSelector((state) => state.user);
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


    const baseMenuItems = {
        profile: {
            title: "Profile",
            id: "profile",
            icon: <PersonIcon />,
            component: <PersonalInformationComponent userProf={userProf} />
        },
        reviews: {
            title: "Reviews",
            id: "reviews",
            icon: <ReviewsIcon />,
            component: <UserReview userName={userProf?.userName} />
        },
        orders: {
            title: "Orders",
            id: "orders",
            icon: <ShoppingBasketIcon />,
            component: <OrdersComponent userProf={userProf} />
        },
    }

    const getMenuItems = (userProf) => {
        switch (userProf?.role) {
            case "Buyer":
                if (currentUser?.userName === userProf.userName) {
                    return baseMenuItems
                }
                return { profile: baseMenuItems.profile, reviews: baseMenuItems.reviews };
            case "Admin":
            case "Seller":
            default:
                return {
                    profile: baseMenuItems.profile
                }
        }
    }

    const menuItems = getMenuItems(userProf);


    const [selectedMenuItem, setSelectedMenuItem] = useState(location.hash ? location.hash.replace('#', '') : menuItems["profile"].id)

    return (
        <>
            <div className="wd-profile-screen-container">
                <div className="wd-profile-screen-account-header">My Account</div>
                <div className="row wd-account-details-container">
                    <div className="col-md-3 col-lg-3 col-xl-3 row wd-account-menu-container">
                        {
                            Object.keys(menuItems).map((menuItemId) =>
                                <div
                                    className={`row-sm row-md row-lg row-xl col ${selectedMenuItem === menuItemId
                                        ? "wd-account-menu-item-active"
                                        : "wd-account-menu-item"}`}
                                    key={menuItemId}
                                    onClick={() => setSelectedMenuItem(menuItemId)}
                                >
                                    <div className='wd-account-menu-item-icon'>
                                        {menuItems[menuItemId].icon}
                                    </div>
                                    <div className="wd-account-menu-item-text">  {menuItems[menuItemId].title}</div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md-9 col-lg-9 col-xl-9 row wd-account-details-item-list-container">
                        {
                            menuItems[selectedMenuItem]?.component
                        }
                    </div>
                </div>
            </div>
        </>



    );

}

export default ProfileScreen;