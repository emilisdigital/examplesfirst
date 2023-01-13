type ActionType = {
    type: string
    isDone: boolean
}
export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    debugger
    switch (action.type) {
        case "TOGGLE-COLLAPSED": {
            return {...state, collapsed: !action.isDone}
        }
        default:
            throw new Error('Bad action type')
    }
}