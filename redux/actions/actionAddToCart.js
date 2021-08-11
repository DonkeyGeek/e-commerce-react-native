import { ADD_TO_CART } from '../constants';

export const addToCart = (course) => {
    return {
        type: ADD_TO_CART,
        course: course
    }
}