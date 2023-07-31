import {configureStore,createSlice} from '@reduxjs/toolkit'

const testState={name:"",age:0,email:""};

const userSlice=createSlice(
    {
        name:'user',
        initialState:testState,
        reducers:{
            login(state,action){
              state=action.payload
            }
        }
    }

)

const colorSlice=createSlice(
    {
        name:'color',
        initialState:{value:"black"},
        reducers:{
            changeTheme(state,action){
              state.value=action.payload
            }
        }

    }
    
)
const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        theme:colorSlice.reducer,
    }
})
export default store;
export const loginAction=userSlice.actions;
export const themeAction=colorSlice.actions;