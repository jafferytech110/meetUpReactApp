import { useState } from "react";
import { useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage(){
    const [isLoading, setisLoading] = useState(true)
    const [loadedMeetups, setloadedMeetups] = useState([])

    //first is function, second is array of dependencies
    useEffect(()=>{
        setisLoading(true)
        fetch('https://react-meetup-12ae5-default-rtdb.firebaseio.com/meetups.json'
        ).then((response)=>{
            //json also returns a promise
            return response.json()
        }).then((data)=>{
            const meetups = []

            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup)
            }

            setisLoading(false)
            setloadedMeetups(meetups)
        })    
    },[])

    if(isLoading) {
        <section>
            <p>Loading....</p>
        </section>
    }
    else {
        return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
    }
}

export default AllMeetupsPage