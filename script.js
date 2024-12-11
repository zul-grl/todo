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

const todoData = [];

const taskdiv = document.getElementById("header");
const input = document.createElement("input");
input.setAttribute("name", "taskName");
input.setAttribute("type", "email");
taskdiv.appendChild(input);

const button = document.createElement("button");
button.innerText = "Add Task";
button.setAttribute("id", "addTask");
taskdiv.appendChild(button);

function addTaskList(title, color, count, id) {
  //html div iig bariad avsan
  const taskContainer2 = document.querySelector("#taskContainer");

  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);

  const body = document.createElement("div");
  body.setAttribute("id", `${id}-body`);
  todoList.appendChild(body);

  const h2 = document.createElement("h2");
  h2.innerText = title;

  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;

  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;

  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);

  taskContainer2.appendChild(todoList);

  const stateTasks = todoData.filter((item) => item.state === id);
  stateTasks.forEach((item) => {
    const listItem = generateItem(item.text, item.pensvg, item.trashsvg);
    body.appendChild(listItem);
  });
  return todoList;
}

function generateItem(text, pensvg, trashsvg) {
  const list = document.createElement("div");
  list.setAttribute("class", "listItem");
  const textdiv = document.createElement("p");
  textdiv.innerText = text;
  const selectdiv = document.createElement("select");
  selectdiv.setAttribute("name", "selectname");
  selectdiv.setAttribute("id", "selectId");

  const optiondiv = document.createElement("option");
  optiondiv.setAttribute("value", "todo");
  selectdiv.appendChild(optiondiv);
  const optiondiv2 = document.createElement("option");
  optiondiv2.setAttribute("value", "in-progress");
  selectdiv.appendChild(optiondiv2);
  const optiondiv3 = document.createElement("option");
  optiondiv3.setAttribute("value", "done");
  selectdiv.appendChild(optiondiv3);
  const optiondiv4 = document.createElement("option");
  optiondiv4.setAttribute("value", "blocked");
  selectdiv.appendChild(optiondiv4);

  list.appendChild(selectdiv);
  list.appendChild(textdiv);
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

input.addEventListener("change", (e) => {
  console.log("onchange", e.target.value);
});
button.addEventListener("click", () => {
  console.log(input.value);
  if (input.value) {
    todoData.push({
      text: input.value,
      pensvg: "./pen.svg",
      trashsvg: "./trash.svg",
      state: "todo",
    });
    const todoDiv = document.getElementById("todo-body");
    todoDiv.innerHTML = null;
    todoData.map((item) => {
      const itemDiv = generateItem(item.text, item.pensvg, item.trashsvg);
      todoDiv.appendChild(itemDiv);
    });
    input.value = null;
  }
});
