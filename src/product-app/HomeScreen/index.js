
import PropertyCard from './PropertyCard';
import './index.css'
import './bootstrap.min.css'
import properties from '../../assets/Properties.json'
import { useEffect } from 'react';
import NavbarComponent from '../NavbarComponent';
import SearchComponent from './SearchComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as service from "../../services/home-page-service"
import { useDispatch } from 'react-redux';
import { findPropertiesThunk } from '../../services/home-page-thunks';


function HomeScreen() {


    const { properties, loading } = useSelector((state) => state.properties);
    const profile = useSelector((state) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPropertiesThunk(profile.id))
    }, [])

    const [filter, setFilter] = useState('');


    console.log("property");
    console.log(properties);

    return (
        <>
            {
                loading && <h3>loading...</h3>
            }

            {
                !loading &&
                <div className='container-fluid wd-container '>
                    <div>
                        <NavbarComponent />
                    </div>
                    <div className="wd-search-comp">
                        <SearchComponent placeHolder="Search for Properties..." onSearch={(res) => { setFilter(res) }} />
                    </div>
                    <div className="wd-mt-40">
                        <div class="row wd-mb-80 wd-home-gallery wd-products-container">
                            {
                                properties.filter(p => p.title?.includes(filter) || filter === '').length === 0 ? <h3>sorry no properties found :(</h3> :
                                    properties.filter(
                                        p => p.title?.includes(filter) || filter === '')
                                        .map(property => <PropertyCard key={property._id} property={property} />)

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