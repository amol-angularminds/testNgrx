import { createAction, props } from "@ngrx/store";
import { interfaceState } from "./counter.store"; 

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const updateT = createAction('updateT',props<{title:string}>());
export const updateCounterBy = createAction('updateCounterBy',props<{counter:number}>());
