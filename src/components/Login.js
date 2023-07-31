import{useDispatch}from'react-redux'
import { loginAction } from '../store';
const Login=() =>{
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch(loginAction.login({name:"BN",age:0,email:"burning9967@outlook.com"}));
        }}
        >LOGIN</button>
    </div>
  )
}

export default Login;