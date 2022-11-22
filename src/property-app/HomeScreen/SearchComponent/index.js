import { useState } from 'react';
import './index.css';

const SearchComponent = (props) => {

    const [filter, setFilter] = useState('');


    return(
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder={props.placeHolder} aria-label="Recipient's username" aria-describedby="basic-addon2" value={filter} onChange={event => setFilter(event.target.value)}/>
            <div class="input-group-append">
                <button class="btn btn-dark" type="button" onClick={()=>props.onSearch(filter)}>Search</button>
            </div>
        </div>
        

        // <div className="wd-search-container">
        //     <input id="search-bar" type="text" value={filter} onChange={event => setFilter(event.target.value)} />
        //     <button type="button" class="btn btn-info" onClick={()=>props.onSearch(filter)}>Search</button>
        //     {/* <button className="buttons" onClick={()=>props.onSearch(filter)}>Search</button> */}
        // </div>
    );
}

export default SearchComponent;