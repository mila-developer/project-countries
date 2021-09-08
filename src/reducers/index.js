import counter from './counter';
import {combineReducers} from 'redux';

const RootReducer = combineReducers ({
    counter
});

export default RootReducer;