import { createSlice } from "@reduxjs/toolkit";
import sourceListChile from "../data/sourceListChile.json";
import sourceListEnergia from "../data/sourceListEnergia.json";
import fetchData from "../utility/fetchData";

const sourceLists = {
    "Chile": sourceListChile,
    "Energia": sourceListEnergia
};

const topicSlice = createSlice({
    name: 'topic',
    initialState: [],
    reducers: {
        changeTopic: (state, action) => {
            const selectedSourceList = sourceLists[action.payload];
            if (selectedSourceList) {
                const links = Object.keys(selectedSourceList).map((id) => fetchData(selectedSourceList[id]));
            } else {
                return [action.payload];
            }
        }
    }
})

export const {changeTopic} = topicSlice.actions;
export default topicSlice.reducer;