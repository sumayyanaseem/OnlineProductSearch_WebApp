import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const GoToHomePage = () => {

    const {currentUser} = useSelector((state) => state.user)
    const navigate = useNavigate()
    if(currentUser && currentUser.length!==0)
    {
        console.log("hello")
        navigate('/')
    }
    else
    {
        console.log("no current user")
        navigate('/login')
    }

};
export default GoToHomePage;
