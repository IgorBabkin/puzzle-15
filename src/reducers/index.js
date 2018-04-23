import {combineReducers} from "redux";
import {gridReducer} from "./grid.reducer";
import {canUpdateGrid, updateGrid} from "./grid.helpers";

export const reducers = combineReducers({
    grid: gridReducer(canUpdateGrid, updateGrid),
});
