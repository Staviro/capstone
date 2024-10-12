//components
import Container from "../container/Container";
import Button from "../button/Button";

//modules
import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import InputError from "../inputError/InputError";

const requiredMsg = "This field is required";
const todaysDate = new Date().toLocaleDateString().replaceAll("/", "-");
const BookingForm = function(props) {
    const [date, setDate] = new useState(todaysDate);
    const [time, setTime] = new useState("");
    const [fullName, setFullName] = new useState("");
    const [email, setEmail] = new useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const formik = useFormik({
        initialValues: {
            date: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            guests: "",
            occasion: "",
            time: ""
        },
        validationSchema: Yup.object({
            date: Yup.string(),
            fullName: Yup.string().min("3").required(requiredMsg),
            email: Yup.string().email("Entered email is not valid").notRequired(),
            phoneNumber: Yup.string().required(requiredMsg),
            guests: Yup.number().min("1").required(requiredMsg),
            occasion: Yup.string().notRequired(),
            time: Yup.string().required(requiredMsg)
        }),
        onSubmit: function(values) {
            props.submitForm(values);
        }
    })
    const inputTimesRef = useRef(null);

    const handleDateChange = function(e) {
        setDate(e.target.value);
        props.dispatch({type: "update_times", value: e.target.value});
        inputTimesRef.current.value = null;
    }

    return(
        <Container>
            <form className="form" onSubmit={formik.handleSubmit}>
                <h4>Reserve a table</h4>
                <p>Please fill out the below form to reserve a table</p>
                <div className="form-item">
                    <label htmlFor="fullName"><span className="text-red">*</span>Full name</label>
                    <input type="text" id="fullName" 
                    value={fullName} 
                    name="fullName" 
                    {...formik.getFieldProps('fullName')}
                    required />
                    { formik.errors.fullName ? <InputError message={formik.errors.fullName} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" 
                    id="email"
                    name="email"
                    value={email}
                    {...formik.getFieldProps('email')}
                     />
                    { formik.errors.email ? <InputError message={formik.errors.email} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="phoneNumber"><span className="text-red">*</span>Phone Number</label>
                    <input type="text" 
                    id="phone-number" 
                    name="phoneNumber"
                    value={phoneNumber}
                    {...formik.getFieldProps('phoneNumber')}
                    required />
                    { formik.errors.phoneNumber ? <InputError message={formik.errors.phoneNumber} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="date"><span className="text-red">*</span>Choose date</label>
                    <input type="date" 
                    id="date" 
                    name="date"
                    required 
                    value={ date } 
                    onChange={(e) => { handleDateChange(e, "date" )}} />
                    { formik.errors.date ? <InputError message={formik.errors.date} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="time"><span className="text-red">*</span>Choose time</label>
                    <select id="time" 
                    name="time"
                    required 
                    value={time}
                    ref={inputTimesRef}
                    {...formik.getFieldProps('time')}
                    >
                        <option>Please select a time</option>
                        { props.data.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                    { formik.errors.time ? <InputError message={formik.errors.time} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="guests"><span className="text-red">*</span>Number of guests</label>
                    <input 
                    type="number" 
                    required 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    name="guests"
                    value={ guests }
                    {...formik.getFieldProps('guests')}
                    id="guests" />
                    { formik.errors.guests ? <InputError message={formik.errors.guests} /> : "" }
                </div>
                <div className="form-item">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                    name="occasion"
                    value={occasion}
                    {...formik.getFieldProps('occasion')}
                    >
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