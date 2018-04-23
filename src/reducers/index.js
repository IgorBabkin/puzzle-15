import {combineReducers} from "redux";
import {gridReducer} from "./grid.reducer";
import {generateGrid, updateGrid} from "./grid.helpers";
import {stepsReducer} from "./steps.reducer";

export const reducers = combineReducers({
    grid: gridReducer(updateGrid, generateGrid),
    steps: stepsReducer,
});
