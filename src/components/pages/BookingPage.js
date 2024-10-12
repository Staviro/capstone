//components
import BookingForm from "../blocks/bookingForm/BookingForm";

//modules
import { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../api/API";
import { useNavigate } from "react-router-dom";

const reducer = function(state, action) {
    if (action.type == "update_times") {
        return updateTimes(state, action.value);
    } else if (action.type == "update_form_response") {
        return {
            ...state,
            formResponse: action.value
        };
    }
    return state;
}

const updateTimes = function(state, date) {
    let newTimes = fetchAPI(new Date(date));
    return {
        ...state,
        availableTimes: newTimes
    };
}

const initialTimes = function() {
    let newTimes = fetchAPI(new Date());
    return newTimes;
}

const BookingPage = function() {
    const initialState = {
        availableTimes : initialTimes(),
        formResponse: null
    }
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitForm = function(formData) {
        const response = submitAPI(formData);
        dispatch({type: "update_form_response", value: response})
    }

    useEffect(function() {
        if (state.formResponse != null)
        if (state.formResponse ) {
            navigate("/confirmedbooking");
        } else {
            alert("Failed");
        }
    },[state])


    return (
        <>
            <BookingForm 
            data={state} 
            submitForm={submitForm}
            availableTimes={state.availableTimes} 
            dispatch={dispatch} ></BookingForm>
        </>
    )
}

export default BookingPage;