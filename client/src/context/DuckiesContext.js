// import { createContext, useReducer } from "react";
// // creating a React Context & exporting it
// export const DuckiesContext = createContext()


// export const duckiesReducer = (state, action) => {
//     switch(action.type){
//         // all this is just for LOCAl state, has nothing to do with database; to keep the local state in sync with the DB;
//         case 'SET_DUCKIES':
//             return {
//             // payload = whatever data is needed to make the change;
//                 duckies: action.payload
//             }
//         case 'CREATE_DUCKIE':
//             return {
//                 duckies: [...state.duckies, action.payload]
//             }
//         case 'DELETE_DUCKIE':
//             return {
//                 duckies: state.duckies.filter((du) => du._id !== action.payload._id )
//             }
//         case 'UPDATE_DUCKIE':
//         return {
//             // this prolly doesn't change anything.
//             // what would I do to update the stat values in real time?
//             // should each switch-case be separated for feed/play/study/etc?
//             duckies: state.duckies.map((du) => du._id == action.payload._id ? action.payload : du)
//         }
//         default:
//             return state
//     }
// }


// // make a function to provide it to components;  needs to wrap the root to provide it to all the components > import in index.js and wrap it around App -- now all components will have access to DuckieContext!
// // children = whatever the context provider is wrapping (App in this case)
// export const DuckiesContextProvider = ({ children }) => {
//     // state & value; funcName & object 
//     const [state, dispatch] = useReducer(duckiesReducer, {
//         duckies: null
//     })

//     // dispatch invokes the reducer function (duckiesReducer)> passes it into the reducer, which then updates the state

//     return (
//         <DuckiesContext.Provider value={{...state, dispatch}}>
//             { children }
//         </DuckiesContext.Provider>
//     )
// }