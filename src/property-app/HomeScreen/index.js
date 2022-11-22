
import PropertyCard from './PropertyCard';
import './index.css'
import './bootstrap.min.css'
import properties from './properties.json'
import NavbarComponent from '../NavbarComponent';
import SearchComponent from './SearchComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';



function HomeScreen(){

    const [filter, setFilter] = useState('');
    const test = useSelector((state)=>state.user);
    console.log(test);
    


    return(
            <div className='container-fluid wd-container '>
                <div>
                    <NavbarComponent />
                </div>
                <div className="wd-search-comp">
                    <SearchComponent onSearch={(res)=>{setFilter(res)}}/>
                </div>
                <div className="wd-mt-40">
                    <div class="row wd-mb-80 wd-home-gallery">
                        {   
                            properties.filter(p => p.name.includes(filter)||filter==='').length===0?<h3>sorry no properties found :(</h3>:
                            properties.filter(p => p.name.includes(filter)||filter==='').map(property=> <PropertyCard key={property._id} property={property} />)
                        }
                    </div>
                </div>
                <div>FOOTER</div>
            </div>
    );
    
}

export default HomeScreen;