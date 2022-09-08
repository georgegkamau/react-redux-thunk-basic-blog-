import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []
// const initialState = {
//     users: [],
//     status: 'idle', // loading succeeded failed
//     error: null,
// }

// const initialState = [
//     { id: '0', name: 'tom boya' },
//     { id: '1', name: 'dendan kimathi' },
//     { id: '2', name: 'cheif wangu' },
// ]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await axios.get(USERS_URL)
        // c s
        return response.data
    } catch (error) {
        console.log(error);
        return error.message;
    }

})

// const usersSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//     }
// })

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})


export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;








