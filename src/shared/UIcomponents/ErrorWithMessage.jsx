
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ErrorWithMessage = (props)=>{

    return(
        <div
          style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:'column'
          }}
        >
          <FontAwesomeIcon icon={faExclamationTriangle} size="2x" style={{color:'#da2a2a'}}/>
          <div style={{marginTop:'1rem',fontWeight:'bold',fontSize:'0.8rem'}}>{props.children}</div>
        </div>
    )

}

export default ErrorWithMessage;