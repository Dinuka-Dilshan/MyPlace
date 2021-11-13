import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  return (
    <div>
      {props.placeList.map((placeItem) => {
        return (
          <PlaceItem
            key={placeItem.id}
            id={placeItem.id}
            name={placeItem.name}
            image={placeItem.image}
            creatorID={placeItem.creatorID}
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
