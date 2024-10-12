import Container from '../container/Container';
import './hero.css';

const Hero = function(props) {
    return (
        <section className="hero">
            <Container>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <br />
                {props.callToAction}
            </Container>
        </section>
    );
}

export default Hero;