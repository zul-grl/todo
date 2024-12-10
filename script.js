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
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];

const todoData = [
  {
    text: "[loan-managament] - Add card component",
    pensvg: "./pen.svg",
    trashsvg: "./trash.svg",
  },
  ,
  {
    text: "[loan-managament] - Add card component",
    pensvg: "./pen.svg",
    trashsvg: "./trash.svg",
  },
  ,
  {
    text: "[loan-managament] - Add card component",
    pensvg: "./pen.svg",
    trashsvg: "./trash.svg",
  },
];

function addTaskList(title, color, count, id) {
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

  todoData.forEach((item) => {
    todoList.appendChild(
      listdata(item.text, item.pensvg, item.trashsvg, `#${id}`)
    );
  });

  return todoList;
}

function listdata(text, pensvg, trashsvg, selectedContainerId) {
  const taskContainer2 = document.querySelector(selectedContainerId);
  const list = document.createElement("div");
  list.setAttribute("class", "listItem");
  const textdiv = document.createElement("p");
  textdiv.innerText = text;
  list.appendChild(textdiv);
  taskContainer2.appendChild(list);
  const svgdiv = document.createElement("div");
  svgdiv.setAttribute("class", "svg");
  list.appendChild(svgdiv);
  const pensvgdiv = document.createElement("img");
  pensvgdiv.setAttribute("src", pensvg);
  svgdiv.appendChild(pensvgdiv);
  const trashsvgdiv = document.createElement("img");
  trashsvgdiv.setAttribute("src", trashsvg);
  svgdiv.appendChild(trashsvgdiv);
  return list;
}

containerItems.forEach(({ title, count, id, color }) => {
  addTaskList(title, color, count, id);
});
