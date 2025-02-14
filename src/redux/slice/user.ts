import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "../../models/interfaces/user.ts";
import {SlicesName} from "../../models/enums/slicesName.ts";


interface UserSlice {
    user: User;
}

const initialState: UserSlice = {
    user:{
        id:0,
        password:'',
        name:'',
        email:'',
    }
};

const userSlice = createSlice({
    name: SlicesName.USER,
    initialState,
    reducers: {
        setUserState(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        resetUserState() {
            return initialState;
        },
    },
});

export const { setUserState,resetUserState } = userSlice.actions;
export default userSlice.reducer;