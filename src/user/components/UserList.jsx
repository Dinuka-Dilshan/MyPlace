import User from "./User";
import Card from "../../shared/UIcomponents/Card";



const UserList = (props) => {
  return props.users.length === 0 ? (
    <Card>No Users</Card>
  ) : (
    props.users.map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places.length}
        />
      );
    })
  );
};

export default UserList;
