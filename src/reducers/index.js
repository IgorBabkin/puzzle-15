import {combineReducers} from "redux";
import {gridReducer} from "./grid.reducer";
import {canUpdateGrid, generateGrid, updateGrid} from "./grid.helpers";
import {stepsReducer} from "./steps.reducer";

export const reducers = combineReducers({
    grid: gridReducer(canUpdateGrid, updateGrid, generateGrid),
    steps: stepsReducer,
});
