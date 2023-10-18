import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    topic: [],
};

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        changeTopic: (state, action) => {
            state.topic.push(action.payload);
        }
    }
})

export const {changeTopic} = topicSlice.actions;
export default topicSlice.reducer;