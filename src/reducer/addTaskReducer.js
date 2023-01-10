export const initialState = [{ id: 1, text: 'Do home work', done: true }];

export default function addTaskReducer(state, action) {
    const { type, payload } = action;
    return {
        ...state
    };
}
