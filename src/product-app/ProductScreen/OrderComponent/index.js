import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, RadioGroup, Radio, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import './index.css';
import AddAddressComponent from './AddAddressComponent';
import { useDispatch, useSelector } from 'react-redux';
import AddressComponent from './AddressComponent';
import { findUserAddressesThunk } from '../../../services/address-thunks';
import { formatDate } from '../../../utils/format-date';
import { createOrder } from '../../../services/order-service';
import { useNavigate } from 'react-router-dom';

const OrderComponent = ({ productId, productPrice ,quantity, showOrderForm, setShowOrderForm }) => {
 
    const [showAddAddressForm, setShowAddAddressForm] = useState(false)
    const { userAddresses, loading:_ } = useSelector((state) => state.userAddresses);
    const [selectedUserAddressId, setSelectedUserAddressId] = useState([]);
    const [deliveryInstruction, setDeliveryInstruction] = useState('');
    const navigate =useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserAddressesThunk())
    }, [])

       const placeOrder = async() => {
        const placeOrderRequest={
            productId,
            quantity,
            addressIds: selectedUserAddressId,
            deliveryInstruction,
            price: productPrice * quantity,
            date: formatDate(new Date())
        }
        await createOrder(placeOrderRequest);
        setShowOrderForm(false);
        navigate('/account#orders')
    }

    return (
        <Dialog
            fullWidth="md"
            open={showOrderForm}
            onClose={() => { setShowOrderForm(false) }}>
            <DialogTitle> Select Delivery Address </DialogTitle>
            <DialogContent>
                <div>
                    <FormGroup >
                        {
                            userAddresses.map(
                                (address, index) => {
                                    return (
                                        <FormControlLabel
                                           key={`${address.name}-${index}`}
                                           style={{width:'100%'}}
                                            fullWidth
                                            value={address._id}
                                            control={<Checkbox onChange={(event) => {
                                                console.log(event.currentTarget.checked)
                                                event.currentTarget.checked === true ? 
                                                setSelectedUserAddressId([...selectedUserAddressId, event.currentTarget.value]) :
                                                setSelectedUserAddressId(selectedUserAddressId.filter(addressId => addressId !== event.currentTarget.value))
                                                
                                            }}/>}
                                            label={
                                                <AddressComponent address={address} />
                                            }
                                        />
                                    )
                                }
                            )}
                    </FormGroup>
                    <button className='wd-order-new-address-btn' onClick={() => setShowAddAddressForm(true)}>+ Add a new Address</button>

                    {showAddAddressForm && <AddAddressComponent setShowAddAddressForm={setShowAddAddressForm} />}
                    <div className='wd-delivery-instruction-container'>
                        <TextField
                            id="deliveryInstruction"
                            label="Delivery Instruction"
                            type="text"
                            fullWidth
                            multiline={true}
                            minRows={4}
                            onChange={(event)=>setDeliveryInstruction(event.target.value)}
                        />
                    </div>
                </div>
            </DialogContent>
            <DialogActions className='wd-order-dialog-action'>
                <button onClick={() => { setShowOrderForm(false) }} className='wd-cancel-order-btn'>Cancel</button>
                <button onClick={placeOrder} className='wd-place-order-btn' disabled={!selectedUserAddressId}>Place Order</button>
            </DialogActions>
        </Dialog>
    )
}

export default OrderComponent;