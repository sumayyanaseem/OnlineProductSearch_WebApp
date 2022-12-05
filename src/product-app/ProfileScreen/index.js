import { Link } from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';
// import profile from './user.json';

const ProfileScreen = () => {

    const profile = useSelector((state) => state.user);
    return (
        <div className='wd-profile-container'>
            <div className='wd-profile-header'>
                {/* TODO whats the use of back */}
                <i className="fa-solid fa-arrow-left-long wd-back"></i>
                <div>
                    <div className='wd-profile-name'>
                        {profile.firstName} {profile.lastName}
                    </div>
                </div>
            </div>
            <div className='wd-picture-container'>
                <div>
                    <div className='wd-banner-picture'>
                        <img src={`/assets/banner.jpeg`} alt="Banner" height="200px" width="100%" />
                    </div>
                    <div className='wd-profile-picture'>
                        <img src={`/assets/${profile.profImg}`} alt="Profile" height="150px" width="150px" />
                    </div>
                </div>
                <div className='wd-edit-profile-btn-container'>
                    {
                        profile.role === 'owner' && <Link className='wd-edit-profile-btn' to={`/add-property`}>
                            Add Property
                        </Link>
                    }
                    {
                        profile.role === 'Admin' && <Link className='wd-edit-profile-btn' to="/manage-requests">
                            Manage Requests
                        </Link>
                    }
                    <Link className='wd-edit-profile-btn' to={`/product/add`}>
                        Add Product
                    </Link>
                </div>
            </div>
            <div className='wd-profile-name'>
                {profile.firstName} {profile.lastName}
            </div>
            <div className='wd-profile-handle'>
                {profile.handle}
            </div>
            <div className='wd-profile-bio'>
                {profile.bio}
            </div>
            <div className='wd-profile-additional-icons-container'>
                <div className='wd-profile-additional-info-container'>
                    <div className='wd-profile-icon'>
                        <i className="bi bi-balloon"></i>
                    </div>
                    <div className='wd-profile-additional-info-text'>
                        DOB: {new Date(profile.dateOfBirth).toDateString()}
                    </div>
                </div>
            </div>
        </div >

    );

}

export default ProfileScreen;