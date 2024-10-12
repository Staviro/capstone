//styles
import './testimonial-card.css'

const TestimonialCard = function(props) {
    return(
        <div className='testimonial-card'>
            <h4>{props.data?.username}</h4>
            <div className='testimonial-card-star'>
            <img alt='star' src={ require('../../../../assets/icons/grade_24dp_000_FILL0_wght400_GRAD0_opsz24.png')} height={16} width={16}/> {props.data?.stars} Stars
            </div>
            <p>{props.data?.text}</p>
        </div>
    )
}

export default TestimonialCard