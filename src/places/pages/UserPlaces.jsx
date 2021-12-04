import { useParams } from "react-router";
import Button from "../../shared/UIcomponents/Button";
import Card from "../../shared/UIcomponents/Card";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
      id: 'p1',
      name: 'Akuressa',
      description: 'Akuressa is located in Matara District of the Southern Province. It is located on the Matara–Deniyaya road, approximately 23.6 km from Matara and 39.7 km from Galle. The surrounding areas produce Tea, Coconut, Rubber and agricultural products such as rice.',
      image: 'https://live.staticflickr.com/4623/25959513888_1d95194a68_b.jpg',
      address: ' Matara District,Southern Province,Sri Lanka',
      location: {
        lat: 6.1001,
        lng: 80.4760
      },
      creatorID: '1'
    },
    {
      id: 'p2',
      name: 'Matara',
      description: 'Matara is a major city in Sri Lanka, on the southern coast of Southern Province. It is the second largest city in Southern Province. It is 160 km from Colombo. It is a major commercial hub, and it is the administrative capital and largest city of Matara District.',
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Things-To-Do-in-Matara.jpg',
      address: 'Matara District,Southern Province,Sri Lanka',
      location: {
        lat: 5.9549,
        lng: 80.5550
      },
      creatorID: '1'
    }
  ];


const UserPlaces = ()=>{

    const userID = useParams().userID;
    const userPlaceList = DUMMY_PLACES.filter(place=>place.creatorID===userID);

    if(userPlaceList.length === 0){
      return <div>
        <Card>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'600', paddingBottom:'1rem'}}>No Places To Show</div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center',marginBottom:'1rem'}}>Want To Add Some Places?</div>
          <Button to='/addPlace'>Add</Button>
        </Card>
      </div>
    }else{
      return(
        <PlaceList placeList={userPlaceList}/>
    )
    }
    
}

export default UserPlaces;