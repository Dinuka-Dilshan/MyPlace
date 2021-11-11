import User from '../components/User'

const UserList = (props)=>{
   return(
    props.users.map(user=>{
        return(
           <User key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.placeCount}/>
        )
    })
   );
}

export default UserList;