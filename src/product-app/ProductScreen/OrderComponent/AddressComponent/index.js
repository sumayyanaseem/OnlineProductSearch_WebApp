import './index.css'
const AddressComponent = ({ address }) => {
    return (
        <div className="wd-address-container">
            <div>
                {address.name}
            </div>
            <div>
                {address.address1}{' '}
            </div>
            <div>
                {address.address2}
            </div>
            <div>
                {address.city}{', '} {address.state}{' '} {address.country}  {' - '}  {address.zipCode}
            </div>
              <div>
                Phone Number: {' '} {address.phoneNumber}
            </div>
        </div>
    )

}

export default AddressComponent;