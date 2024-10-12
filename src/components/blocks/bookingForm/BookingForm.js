//components
import Container from "../container/Container";
import Button from "../button/Button";

//modules
import { useState } from "react";

const BookingForm = function(props) {
    console.log(props);
    return(
        <Container>
            <form className="form">
                <h4>Reserve a table</h4>
                <p>Please fill out the below form to reserve a table</p>
                <div className="form-item">
                    <label htmlFor="res-date"><span className="text-red">*</span>Full name</label>
                    <input type="text" id="res-date" required />
                </div>
                <div className="form-item">
                    <label htmlFor="res-date">Email Address</label>
                    <input type="text" id="res-date" />
                </div>
                <div className="form-item">
                    <label htmlFor="res-date"><span className="text-red">*</span>Phone Number</label>
                    <input type="text" id="res-date" required />
                </div>
                <div className="form-item">
                    <label htmlFor="res-date"><span className="text-red">*</span>Choose date</label>
                    <input type="date" id="res-date" required  onChange={ () => { props.dispatch({type: "update_times"}) }}/>
                </div>
                <div className="form-item">
                    <label htmlFor="res-time"><span className="text-red">*</span>Choose time</label>
                    <select id="res-time" required>
                        { props.data.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="guests"><span className="text-red">*</span>Number of guests</label>
                    <input type="number" required placeholder="1" min="1" max="10" id="guests" />
                </div>
                <div className="form-item">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-item"></div>
                <Button styles="btn btn-primary" type="submit">
                    Make Your Reservation
                </Button>
            </form>
        </Container>
    )
}

export default BookingForm;