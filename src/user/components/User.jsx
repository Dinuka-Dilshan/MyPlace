import Card from "../../shared/UIcomponents/Card";
import Avatar from "../../shared/UIcomponents/Avatar";
import { Link } from "react-router-dom";
import "./User.css";

const User = (props) => {
  return (
    <Card>
      <div className="d-flex">
        <Avatar name={props.name} image={props.image} />
        <div className="user-wrapper">
          <div className="name">
            <Link
              to={`/users/${props.id}`}
              className={"text-decoration-none"}
            >
              {props.name}
            </Link>
          </div>
          <div className="placeCount">
            <Link
              to={`/places/users/${props.id}`}
              className={"text-decoration-none"}
            >
              {props.placeCount} {props.placeCount > 1 ? "Places" : "Place"} 
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default User;
