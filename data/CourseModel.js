class CourseModel {
    constructor(id, title, description, image, price, selected, instructorId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
        this.selected = selected;
        this.instructorId = instructorId;
    }
}
export default CourseModel;