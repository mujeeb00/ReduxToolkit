import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "../Slice";
import counterRedcuer from '../Slice'

export const store =configureStore({
    reducer: { counter: counterRedcuer },
})