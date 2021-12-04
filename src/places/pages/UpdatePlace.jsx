import { useParams } from "react-router";
import Input from "../../shared/UIcomponents/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from "../../shared/UIcomponents/Button";
import { useForm } from "../../shared/Hooks/form-hook";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
import Card from "../../shared/UIcomponents/Card";

const DUMMY_PLACES = [
  {
    id: "p1",
    name: "Akuressa",
    description:
      "Akuressa is located in Matara District of the Southern Province. It is located on the Matara–Deniyaya road, approximately 23.6 km from Matara and 39.7 km from Galle. The surrounding areas produce Tea, Coconut, Rubber and agricultural products such as rice.",
    image: "https://live.staticflickr.com/4623/25959513888_1d95194a68_b.jpg",
    address: " Matara District,Southern Province,Sri Lanka",
    location: {
      lat: 6.1001,
      lng: 80.476,
    },
    creatorID: "1",
  },
  {
    id: "p2",
    name: "Matara",
    description:
      "Matara is a major city in Sri Lanka, on the southern coast of Southern Province. It is the second largest city in Southern Province. It is 160 km from Colombo. It is a major commercial hub, and it is the administrative capital and largest city of Matara District.",
    image:
      "https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Things-To-Do-in-Matara.jpg",
    address: "Matara District,Southern Province,Sri Lanka",
    location: {
      lat: 5.9549,
      lng: 80.555,
    },
    creatorID: "1",
  },
];

const UpdatePlace = () => {
  const placeID = useParams().placeID;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isLoading, setIsLoading] = useState(true);

  const selectedPlace = DUMMY_PLACES.find((place) => place.id === placeID);

  useEffect(() => {
    if (selectedPlace) {
      setFormData(
        {
          title: {
            value: selectedPlace.name,
            isValid: true,
          },
          description: {
            value: selectedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, selectedPlace]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'600'}}>Loading...</div>
      </div>
    );
  } else if (!selectedPlace) {
    return (
      <Card>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'600'}}>No Such Place Found</div>
      </Card>
    );
  } else {
    return (
      <div>
        <form onSubmit={formSubmitHandler}>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            text="Place Title"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            value={formState.inputs.title.value}
            valid={formState.inputs.title.isValid}
          />

          <Input
            type="text"
            id="description"
            placeholder="Description"
            text="Description"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            value={formState.inputs.description.value}
            element="textarea"
            rows={5}
            valid={formState.inputs.description.isValid}
          />

          <Button
            styles={{ width: "100%", marginTop: "1rem", padding: "0.7rem" }}
            disabled={!formState.isValid}
          >
            UPDATE PLACE
          </Button>
        </form>
      </div>
    );
  }
};

export default UpdatePlace;
