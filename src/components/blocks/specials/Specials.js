//styles
import './specials.css';

//components
import Container from "../container/Container";
import SpecialCard from './card/SpecialCard';

const Specials = function(props) {
    const specialCards = props.data?.length > 0 ? 
    props.data.map((item) => {
        return <SpecialCard data={item} key={item.id}></SpecialCard>
    }) 
    : <h3>We currently do not have specials at the moment...<br/> Please check again later</h3>
    return(
        <section>
            <Container>
                <div className="specials-container">
                    <h3>{props.config.title}</h3>
                    <br />
                    <div className='specials-list'>
                        { specialCards }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Specials;