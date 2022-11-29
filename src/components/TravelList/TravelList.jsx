// import axios for your get request
// import useContext and others from react 
// import AuthContext 
import ResortCard from "../ResortCard/ResortCard"
import axios from "axios"
import { useContext, useEffect, useState, useCallback } from "react"
import AuthContext from "../../store/authContext"



const TravelList = () => {

    const authCtx = useContext(AuthContext);
    const [travelList, setTravelList] = useState([]);

    const getAllUserResorts = () => {
        console.log('hitting axios .get')
        axios.get(`http://localhost:4513/userresort/${authCtx.userId}`, { headers: { authorization: authCtx.token } })
            .then(res => {
                console.log(res.data)
                setTravelList(res.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(getAllUserResorts, [])

    // adding remove function
    // taking in resort as a param 
    const removeFromTravelList = (id) => {
        axios.delete(`http://localhost:4513/userresort/${id}`, { headers: { authorization: authCtx.token } })
            .then(() => {
                getAllUserResorts()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const resortsDisplay = travelList.map((travelListItem, index) => {

        return (
            <ResortCard resort={travelListItem.resort} travelList={true} travelListId={travelListItem.id} removeFromTravelList={removeFromTravelList} />
        )
    })
    return (
        <div>
            <h1>Your Travel list</h1>

            <div>
                {resortsDisplay}
            </div>
        </div>
    )
}

export default TravelList