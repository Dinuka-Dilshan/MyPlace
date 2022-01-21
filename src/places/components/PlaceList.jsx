import PlaceItem from "./PlaceItem";
import './PlaceItem.css';

const PlaceList = (props) => {
  return (
    <div >
      {props.placeList.map((placeItem) => {
        return (
          <PlaceItem
            key={placeItem._id} 
            id={placeItem._id}
            name={placeItem.name}
            image={placeItem.image}
            creatorID={placeItem.createrID}
            location={placeItem.location}
            description={placeItem.description}
            address={placeItem.address}
          />
        );
      })}
    </div>
  );
};

export default PlaceList;
