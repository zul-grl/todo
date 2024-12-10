/* <div class="todoList">
          <div class="title">
            <div class="circle"></div>
            <h2>To do</h2>
            <p class="count">5</p>
          </div>
          <div class="list">
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
            <div class="listItem">
              <p>[loan-managament] - Add card component</p>
              <select name="" id="">
                <option value="">In progress</option>
                <option value="">Done</option>
              </select>
              <img src="./trash.svg" alt="" />
            </div>
          </div>
        </div> */

const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id: "todo",
    text: "[loan-managament] - Add card component",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
    text: "[loan-managament] - Add card component",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
    text: "[loan-managament] - Add card component",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
    text: "[loan-managament] - Add card component",
  },
];
// const taskitems=[
//   text: "[loan-managament] - Add card component",

// ]
// const todoData = [
//   {
//     text: "[loan-managament] - Addcard component",
//     pensvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>`,
//     trashsvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#d40c0c" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>`,
//   },
// ];
function addTaskList(title, color, count, id, text) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");
  //todoList = <div class="todoList">
  //   <div class="title"></div>
  // </div>
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  // title = <div class="title"></div>
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  // <h2>To do</h2>
  const h2 = document.createElement("h2");
  h2.innerText = title;
  // <div style={backgroundColor:"white" } class="circle"></div>
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  // <p class="count"></p>
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer2.appendChild(todoList);
  const list = document.createElement("div");
  list.setAttribute("class", "listItem");
  todoList.appendChild(list);
  const textdiv = document.createElement("p");
  textdiv.innerText = text;

  list.appendChild(textdiv);
  const svgdiv = document.createElement("div");
  svgdiv.setAttribute("class", "svg");
  list.appendChild(svgdiv);
  const pensvgdiv = document.createElement("img");
  pensvgdiv.setAttribute("src", "./pen.svg");
  svgdiv.appendChild(pensvgdiv);
  const trashsvgdiv = document.createElement("img");
  trashsvgdiv.setAttribute("src", "./trash.svg");
  svgdiv.appendChild(trashsvgdiv);
}
containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id, item.text);
});
