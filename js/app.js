const $students = $(".student-item");
$students.remove();

const selectStudents = (studentList, pageIndex) => {
    return studentList.splice(pageIndex * 10 - 10, pageIndex * 10);
}

const buttonCount = (studentList) => {
    return Math.ceil(studentList.length / 10);
}

const createButtons = (buttonCount) => {
    const arrayOfButtons = ["<ul class=pagination>"];
    let index = 1;
    while (arrayOfButtons.length < buttonCount) {
        arrayOfButtons.push(`<li><a>${index}</a></li>`)
        index++;
    }
    arrayOfButtons.push("</ul>")
    return arrayOfButtons.join("");
}

$(".student-list").append(selectStudents($students, 1));
$(".student-list").append(createButtons(buttonCount($students)));