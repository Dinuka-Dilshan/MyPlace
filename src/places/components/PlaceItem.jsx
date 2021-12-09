import Card from "../../shared/UIcomponents/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../shared/UIcomponents/Button";

import "./PlaceItem.css";
import {
  faEdit,
  faMapMarkerAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../../shared/UIcomponents/Modal";
import Map from "../../shared/UIcomponents/Map";
import { NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../shared/Context/Auth-context";

const PlaceItem = (props) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const auth = useContext(AuthContext);
  const openMapHandler = () => {
    setIsMapOpen(true);
  };

  const closeMapHandler = () => {
    setIsMapOpen(false);
  };

  const openWarningHandler = () => {
    setIsWarningOpen(true);
  };

  const closeWarningHandler = () => {
    setIsWarningOpen(false);
  };

  const deleteItemHandler = () => {
    setIsWarningOpen(false);
    console.log("deleted");
  };

  return (
    <div>
      {isMapOpen ? (
        <Modal header={props.name} onClose={closeMapHandler}>
          <Map lat={props.location.lat} lng={props.location.lng} zoom={16} />
        </Modal>
      ) : null}

      {isWarningOpen ? (
        <Modal
          onOkBtnClick={deleteItemHandler}
          header="Are You Sure?"
          okBtn
          okBtnText="Delete"
          onClose={closeWarningHandler}
        >
          <h5>
            Do You Want To Preceed And Delete this Place? This Cannot Be Undone
            Once After Delete.
          </h5>
        </Modal>
      ) : null}

      <Card styles={{ padding: 0 }}>
        <div className="image-wrapper">
          <img className="image" src={props.image} alt={props.name} />
        </div>
        <div className="content-wrapper">
          <div className="title">{props.name}</div>
          <div className="address">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.address}
            </div>
          </div>
          <div className="description">{props.description}</div>

          <div className="btn-wrapper">
            <div className="btn-item">
              <Button onClick={openMapHandler}> View On Map </Button>
            </div>
            {auth.isLoggedIn &&<div className="btn-item">
              <Button onClick={openWarningHandler}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>}
            <div className="btn-item"></div>

            {auth.isLoggedIn &&<NavLink to={`/places/${props.id}`}>
              <Button>
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </NavLink>}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlaceItem;
