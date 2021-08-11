import { EDIT_COURSE } from '../constants';

export const editCourse = (id, title, img, desc) => {
    return {
        type: EDIT_COURSE,
        courseId: id,
        updatedCourse: { title, img, desc }
    }
}