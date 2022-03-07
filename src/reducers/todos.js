import { TODO } from "../constants"
const initilaState = []
export const todos = (state = initilaState, action) => {
    
    switch (action.type) {
        case TODO.ADD_TODO:
            return [
                ...state,
                action.payload
            ].reverse()

        case TODO.REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id)

        case TODO.MARK_TODO_DONE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        isDone: action.payload.isDone
                    }
                } else {
                    return item
                }
            })
        case TODO.INITIAL_TODOS:
            return action.payload

        default:
            return state

    }
}

// https://www.youtube.com/watch?v=fiesH6WU63I