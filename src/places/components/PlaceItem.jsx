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
import Modal from '../../shared/UIcomponents/Modal';
import Map from '../../shared/UIcomponents/Map';

const PlaceItem = (props) => {

  const [isMapOpen,setIsMapOpen] = useState(false);


  const openMapHandler = ()=>{
    setIsMapOpen(true);
  }

  const closeMapHandler = ()=>{
    setIsMapOpen(false);
  }


  return (
    <div>
    {isMapOpen?<Modal header={props.name} onClose={closeMapHandler}>
      <Map lat={props.location.lat} lng={props.location.lng} zoom={16}/>
    </Modal>:null}
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
          <div className="btn-item">
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          <div className="btn-item"></div>

          <Button>
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default PlaceItem;
