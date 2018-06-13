const $students = $(".student-item");
const $studentContainer = $(".student-list");

const selectStudents = (studentList, pageIndex) => {
  return studentList.slice(pageIndex * 10 - 10, pageIndex * 10);
};

const showStudents = (studentList, pageNumber) => {
  $studentContainer.empty();
  $studentContainer.append(selectStudents(studentList, pageNumber));
};

const buttonCount = studentList => {
  return Math.ceil(studentList.length / 10);
};

const createButtons = buttonCount => {
  const arrayOfButtons = ["<ul class=pagination>"];
  let index = 1;
  while (arrayOfButtons.length <= buttonCount) {
    arrayOfButtons.push(`<li><a>${index}</a></li>`);
    index++;
  }
  arrayOfButtons.push("</ul>");
  return arrayOfButtons.join("");
};

const createListeners = $element => {
  $element.click(event => {
    showStudents($students, event.target.innerText);
  });
};

// const createSearch = () => {
//   $(".page-header").append(`<input class=search js_search>`);
//   $(".search").keyup((event) => onSearch(event.target.value))};

// const searchFilter = (studentList, searchInput) => {
//   return studentList.filter(() => {
//     if (this.find(searchInput)) {
//       return true;
//     }
//   });
// };

// const onSearch = (searchTerm) => {
//     const $searchlist = searchFilter($students, searchTerm)
//     $(".pagination").remove()
//     $studentContainer.after(createButtons(buttonCount($searchlist)));
//     showStudents($students, 1);
// }

const onPageLoad = () => {
  $studentContainer.after(createButtons(buttonCount($students)));
  showStudents($students, 1);
  createListeners($(".pagination").children());
  createSearch();

  console.log(
    `${buttonCount($students)} buttons created for ${$students.length} students`
  );
};

onPageLoad();
