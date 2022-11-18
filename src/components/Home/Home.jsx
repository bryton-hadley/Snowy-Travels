import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
//Make a state value for the resorts 
// write a function to get resorts put on state use a get request 
//  invoke function within useEffect
//  in the render we will map over the array and return the resort card array 

const Home = () => {

    const [resorts, setResorts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4513/resorts')
            .then(res => {
                console.log(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div>home</div>
    )
}

export default Home