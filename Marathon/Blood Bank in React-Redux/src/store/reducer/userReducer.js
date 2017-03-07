
const InitalState = {
    user: [],
};

const UserReducer = (state = InitalState, action) => {
    switch (action.type) {
        case "find":
            return Object.assign(state, { user: action.value})
    }
    return state
}

export default UserReducer
