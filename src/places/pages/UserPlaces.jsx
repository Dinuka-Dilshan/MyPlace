import { useParams } from "react-router";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
      id: 'p1',
      name: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creatorID: '1'
    },
    {
      id: 'p2',
      name: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creatorID: '2'
    }
  ];


const UserPlaces = ()=>{

    const userID = useParams().userID;
    const userPlaceList = DUMMY_PLACES.filter(place=>place.creatorID===userID);

    return(
        <PlaceList placeList={userPlaceList}/>
    )
}

export default UserPlaces;