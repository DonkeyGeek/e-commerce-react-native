import { REMOVE_COURSE_CART } from '../constants';

export const removeCourseCart = (courseId) => {
    return {
        type: REMOVE_COURSE_CART,
        prodId: courseId
    }
}