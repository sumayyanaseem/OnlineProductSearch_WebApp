import React, {useEffect} from "react";
import {profileThunk} from "../../services/user-thunks";
import {useDispatch, useSelector} from "react-redux";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}

export default CurrentUser