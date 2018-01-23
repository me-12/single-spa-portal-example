import {Action, createStore, Store} from 'redux';

export interface IAppState {
    count: number;
}

export interface IAppState {
    count: number;
}

export const INITIAL_STATE: IAppState = {
    count: 0,
};

export class CounterActions {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    increment(): Action {
        return { type: CounterActions.INCREMENT };
    }

    decrement(): Action {
        return { type: CounterActions.DECREMENT };
    }
}

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    switch(action.type) {
        case CounterActions.INCREMENT: return { count: lastState.count + 1 };
        case CounterActions.DECREMENT: return { count: lastState.count - 1 };
    }

    return lastState;
}

export const storeInstance: Store<IAppState> = createStore(rootReducer, INITIAL_STATE);