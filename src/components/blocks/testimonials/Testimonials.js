//styles
import './testimonials.css';

//components
import Container from "../container/Container";
import TestimonialCard from './card/TestimonialCard';

const Testimonials = function(props) {
    const testimonialCards = props.data?.length > 0 ?
    props.data.map(function(item) {
        return <TestimonialCard data={item} key={item.id}></TestimonialCard>
    })
    : <h5>This feature is unavailable at the moment. We apologise for this inconvenience</h5>
    return(
        <section>
            <Container>
                <h3>Testimonials</h3>
                <p>See what customers have to say about our restaurant.</p>
                <div className="testimonials-list">
                    { testimonialCards }
                </div>
            </Container>
        </section>
    )
}

export default Testimonials;