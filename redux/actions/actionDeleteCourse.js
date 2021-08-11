import { DELETE_COURSE } from '../constants';

export const deleteCourse = (courseId) => {
    return {
        type: DELETE_COURSE,
        courseId: courseId
    }
}