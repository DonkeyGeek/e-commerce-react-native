import { createStore, combineReducers } from 'redux';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';

const rootReducer = combineReducers({
    courses: reducerCourses,
    cart: reducerCart,
    payments: reducerPayment
})

const store = createStore(rootReducer);

export default store;