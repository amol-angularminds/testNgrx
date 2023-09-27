import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, updateT, updateCounterBy } from './counter.action';
import { initialState } from './counter.store';



export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
             counter : state.counter+1, 
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter-1, 
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0, 
        }
    }),

    on(updateT, (state,action) => {
        return {
            ...state,
            title: action.title, 
        }
    }),

    on(updateCounterBy, (state,action) => {
        return {
            ...state,
            counter: state.counter + action.counter, 
        }
    }),
);