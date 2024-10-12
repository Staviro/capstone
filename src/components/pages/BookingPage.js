//components
import BookingForm from "../blocks/bookingForm/BookingForm";

//modules
import { useState, useReducer } from "react";

const reducer = function(state, action) {
    if (action.type == "update_times") {
        return updateTimes(state);
    }
    return state;
}

const updateTimes = function(state) {
    console.log("updateTimes: ", state);
    return state;
}

const initialTimes = function() {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]
}

const BookingPage = function() {
    const initialState = {
        availableTimes : initialTimes()
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <BookingForm data={state} dispatch={dispatch} ></BookingForm>
        </>
    )
}

export default BookingPage;