export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing...
    //token: 'BQCP4UbXVB4Dlw3s4BTSy2Ov0EQM9_vtoa_JIixJgO9SzKItcSuHuw2o6EE9LsgyHIFeKK5v2kEjZoOjvttD-FGcfgjjacWk8tUu2cVyICabuKzuc-f5nFcAzj632kiLXVSWQBsfFYzGBL6GEZ8zq9aITuopSKQ2dozE1yflz4ArPdfZ'
    
};

const reducer = (state, action) => {
    console.log(action);
    // Action => type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer;