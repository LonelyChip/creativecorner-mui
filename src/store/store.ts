import {configureStore, createSlice}  from "@reduxjs/toolkit";

const usersSlice = createSlice({
	name: "users",
	initialState: {value:[{userId:"", userName:"",photo:"",}]},
	reducers: {
		loadUsers:(state, action)=>{
			state.value = action.payload;
		}
	}
})

export const {loadUsers} = usersSlice.actions;

export const store = configureStore({
	reducer:{
		users: usersSlice.reducer,
	}
});
