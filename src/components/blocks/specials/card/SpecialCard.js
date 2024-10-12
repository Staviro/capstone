//styles
import './special-card.css';

//components
import Button from "../../button/Button";

const SpecialCard = function(props) {
    return (
        <div className="special-card">
            <div className="special-card-img-container">
                <img height={156} src={props.data?.image}></img>
            </div>
            <div className="special-card-body">
                <h3>{props.data?.name}</h3>
                <h5>{props.data?.price}</h5>
                <p>{props.data?.description}</p>
                <Button styles="btn btn-primary">Order</Button>
            </div>
        </div>
    )
}

export default SpecialCard;