import {reducer, StateType} from "./reducer";

test('reducer should change value to opposite value', () => {
    const state: StateType = { collapsed: false }

    const action = {type: "TOGGLE-COLLAPSED", isDone: state.collapsed}

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(true)
})

test('reducer should change value to opposite false', () => {
    const state: StateType = { collapsed: true }

    const action = {type: "TOGGLE-COLLAPSED", isDone: state.collapsed}

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    const state: StateType = { collapsed: true }

    expect( () => {
        reducer(state,{type: "LSFJDLSDKJ", isDone: state.collapsed})
    } ).toThrowError()
})