import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
    //creating reference object to input title tag to get value
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    // event object received by submit
    function submitHandler(event){
        event.preventDefault()
        //reference ref to DOM element... current property holds the value
        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        console.log(meetupData)
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="Meetup Title">Meetup Title</label>
                <input type="text" required name="title" id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="Meetup Image">Meetup Image</label>
                <input type="url" required name="title-image" id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="Meetup Address">Meetup Address</label>
                <input type="text" required name="address" id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="Meetup Description">Meetup Description</label>
                <textarea name="description" id="description" required cols="30" rows="10" ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm