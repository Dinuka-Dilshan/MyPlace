import BackDrop from "./BackDrop";
import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <BackDrop>
      <div className="lds-wrapper">
      <div className="lds-facebook"><div></div><div></div><div></div></div>
      </div>
    </BackDrop>
  );
};

export default LoadingSpinner;
