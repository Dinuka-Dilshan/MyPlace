
import './Card.css';

const Card = (props)=>{


    return(
        <div className='card' style={props.styles} >
            {props.children}
        </div>
    )
}


export default Card;
