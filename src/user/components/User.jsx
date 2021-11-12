import Card from "../../shared/UIcomponents/Card";
import Avatar from "../../shared/UIcomponents/Avatar";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

import "./User.css";

const User = (props) => {
  return (
    <Card>
      <div className="d-flex">
        <Avatar name={props.name} image={props.image} />
        <div className="user-wrapper">
          <motion.div className="name" whileHover={{scale:1.1,originX:0}}>
            <Link
              to={`/users/${props.id}`}
              className={"text-decoration-none"}
            >
              {props.name}
            </Link>
          </motion.div>
          <motion.div className="placeCount" whileHover={{scale:1.1,originX:0}}>
            <Link
              to={`/places/users/${props.id}`}
              className={"text-decoration-none"}
            >
              {props.placeCount} {props.placeCount > 1 ? "Places" : "Place"} 
            </Link>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};

export default User;
