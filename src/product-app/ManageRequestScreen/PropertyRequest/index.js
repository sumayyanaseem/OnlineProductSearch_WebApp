
import "./index.css";
import { Link } from "react-router-dom";

const PropertyRequest = ({ request }) => {
    console.log(request)
    return (
        <tr>
            <td className="wd-request-element">{request.req_id}</td>
            <td className="wd-request-element">{request.owner}</td>
            <td className="wd-request-element">{request.PropertyName}</td>
            <td className="wd-request-element">{request.Location}</td>
            <td className="wd-request-element">{request.date}</td>
            <td className="actions">
                <Link to={`/property/${request.propertyID}`} type="button" className="btn btn-dark">Review</Link>
            </td>
        </tr >
    );
}

export default PropertyRequest;