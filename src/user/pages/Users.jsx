import UserList from "../components/UserList"
import UserData from '../../data';

const Users = (props)=>{
    return(
        <UserList users={UserData}/>
    )
}

export default Users;