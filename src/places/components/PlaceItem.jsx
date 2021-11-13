import Card from "../../shared/UIcomponents/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../shared/UIcomponents/Button";

import "./PlaceItem.css";
import {
  faEdit,
  faMapMarkerAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const PlaceItem = (props) => {
  return (
    <div>
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
            <Button> View On Map </Button>
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
