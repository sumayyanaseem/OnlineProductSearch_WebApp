import NavbarComponent from "../NavbarComponent";
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import './index.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import Button from '@mui/material/Button';
import { findAllProductRequestsThunk } from '../../services/product-request-thunks.js';
import { approveProductRequestThunk, rejectProductRequestThunk } from '../../services/product-request-thunks.js';



function ManageRequestScreen() {

    const { productRequests, loading } = useSelector((state) => state.productRequests);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllProductRequestsThunk())
    }, [])

    const navigate = useNavigate();

     const productDetailsCells = (params) => {
        return (
            <div className="wd-manage-req_product-id-cell" onClick={()=>{navigate(`/product/${params.row.productID}`)}}>
               { params.row.productID}
            </div>
        )
     }


    const renderDetailsButton = (params) => {


        if (params.row.status === "Approved" ||params.row.status === "Rejected" ) {

            return (
                <>


                    <strong>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                            disabled
                        >
                            {params.row.status}
                        </Button>
                    </strong>
                </>
            )
        } else {

            return (
                <>
                    <strong>
                        <div className="wd-manage-req_status">

                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                            className="wd-manage-req_approve-btn"
                            onClick = {()=>{dispatch(approveProductRequestThunk(params.row.id))}}
                        >
                            Approve
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="wd-manage-req_reject-btn"
                            style={{ marginLeft: 16 }}
                            onClick = {()=>{dispatch(rejectProductRequestThunk(params.row.id))}}
                        >
                            Reject
                        </Button>
                        </div>
                    </strong>
                </>
            )

        }

    }

    const columns = [
        { field: 'id', headerName: 'REQUESTID', width: 172 },
        { field: 'productID', headerName: 'PRODUCTID', width: 170, renderCell: productDetailsCells},
        { field: 'seller', headerName: 'SELLER', width: 172 },
        { field: 'productName', headerName: 'PRODUCT NAME', width: 172 },
        { field: 'date', type:'', headerName: 'DATE', width: 172 },
        { field: 'status', headerName: 'STATUS', width: 172 },
        { field: 'action', headerName: 'ACTION', width: 172, renderCell: renderDetailsButton, filterable: false },
    ];



    const rows = productRequests;

    return (
        <>
            {
                loading &&  
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}

            >      <ReactLoading type="spiral" color="#0000FF"
                height={100} width={50} /></div>
            }

            {
                !loading &&
                <>
                    <NavbarComponent />

                    <div className="wd-manage-req-container">
                        <div style={{ width: '100%' }}>
                            <DataGrid rowHeight={95} rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} autoHeight="true" />
                        </div>
                    </div>
                </>

            }

        </>
    );


}

export default ManageRequestScreen