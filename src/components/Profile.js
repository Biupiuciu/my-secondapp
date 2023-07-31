import {useSelector} from 'react-redux'
const Profile=() =>{

    const user=useSelector(state=>state.user)
    const themecolor=useSelector(state=>state.theme.value)
    console.log(user);
    console.log(themecolor);
  return (
    <div style={{color:themecolor}}>
        
        <h1>Profile</h1>
        <h5>Name:{user.name}</h5>
        <h5>Age:{user.age}</h5>
        <h5>Email:{user.email}</h5>
    </div>
  )
}

export default Profile;