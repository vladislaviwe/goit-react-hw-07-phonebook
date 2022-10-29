// Using Redux Toolkit + Reducer----------------------------------------------

// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

// const filterReducer = createReducer("", {
//     [setFilter.type]: (_, {payload}) => payload,
// })

// export default filterReducer;

// Using vanilla redux--------------------------------------------------------

// import { SET_FILTER } from './filter-types';

// const initialState = {
//     filter: ""
// };

// const filterReducer = (store = initialState, { type, payload}) => {
//     switch (type) {
//         case SET_FILTER:
//             return { ...store, filter: payload }
//         default:
//             return store;
//     }
// }

// export default filterReducer;

// -----------------------------------------------------------