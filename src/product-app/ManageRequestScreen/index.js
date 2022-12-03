import NavbarComponent from "../NavbarComponent";
import requests from './admin-requests.json';
import PropertyRequest from "./PropertyRequest";
import './index.css'
import SearchComponent from "../HomeScreen/SearchComponent";
import { useState } from "react";

function ManageRequestScreen() {

    const [filter, setFilter] = useState('');

    return (
        <>
            <NavbarComponent />

            <div className="wd-search-comp">
                <SearchComponent placeHolder="Search for Requests.." onSearch={(res) => { setFilter(res) }} />
            </div>
            <div className="wd-manage-req-container">
                <table className="layout display responsive-table">
                    <thead>
                        <tr>
                            <th>Request Number</th>
                            <th>Owner Name</th>
                            <th>Propert Name</th>
                            <th>Location</th>
                            <th>Date Posted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.filter(p => p.req_id?.includes(filter) || filter === '').length === 0 ? <h3>sorry no requests found :(</h3> :
                                requests.filter(p => p.req_id?.includes(filter) || filter === '').map(request => <PropertyRequest key={request.req_id} request={request}></PropertyRequest>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );


}

export default ManageRequestScreen