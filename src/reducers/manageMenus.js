const initialState = {
    searchResults: {},
    newMenuPlan: [],
    menuPlans: []
}

export default function manageMenus(state = initialState, action) {
    switch (action.type) {

    case 'SEARCH':
        return { ...state, searchResults: action.payload }

    default:
        return state
    }
}
