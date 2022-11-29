import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import ResortCard from '../ResortCard/ResortCard'
//Make a state value for the resorts 
// write a function to get resorts put on state use a get request 
//  invoke function within useEffect
//  in the render we will map over the array and return the resort card array 

const Home = ({ travelList, addResort }) => {

    const [resorts, setResorts] = useState([]);
    const [search, setSreach] = useState("");

    useEffect(() => {
        axios.get('http://localhost:4513/resorts')
            .then(res => {
                setResorts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const resortDisplay = resorts
        .filter((resort) => {
            let searchResort = resort.name.toLowerCase()
            let searchParams = search.toLowerCase()

            return searchResort.includes(searchParams)
        })
        .map(resort => {

            return <ResortCard key={resort.id} resort={resort} travelList={false} addResort={addResort} />
        })
    return (


        <section>
            <span>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSreach(e.target.value)}
                    placeholder="Search Resort:"
                />
                <div className='resort-display'>
                    {resortDisplay ? resortDisplay : <h2>Ski Resort hasn't been added </h2>}
                </div>
            </span>
        </section>
    )
}

export default Home