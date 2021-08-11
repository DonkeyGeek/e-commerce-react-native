import { ADD_PAYMENT } from '../constants';

export const addPayment = (cartCourses, total) => {
    return {
        type: ADD_PAYMENT,
        orderInfos: {
            courses: cartCourses,
            total: total
        }
    }
}