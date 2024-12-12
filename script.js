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

  // const stateTasks = todoData.filter((item) => item.state === item.id);
  // stateTasks.forEach((item) => {
  //   const listItem = generateItem(item.text, item.pensvg, item.trashsvg);
  //   body.appendChild(listItem);
  // });

  // const stateTasks = todoData.filter((item) => item.state === id);
  // stateTasks.forEach((item) => {
  //   const listItem = generateItem(
  //     item.text,
  //     item.pensvg,
  //     item.trashsvg,
  //     item.index
  //   );
  //   body.appendChild(listItem);
  // });
  return todoList;
}

function generateItem(text, pensvg, trashsvg, index) {
  const list = document.createElement("div");
  list.setAttribute("class", "listItem");
  const textdiv = document.createElement("p");
  textdiv.innerText = text;
  const selectdiv = document.createElement("select");
  selectdiv.setAttribute("name", "selectname");
  selectdiv.setAttribute("id", "selectId");
  selectdiv.addEventListener("change", (event) => {
    switchState(index, event.target.value);
  });
  const optiondiv = document.createElement("option");
  optiondiv.setAttribute("value", "todo");
  optiondiv.innerText = "todo";
  selectdiv.appendChild(optiondiv);
  const optiondiv2 = document.createElement("option");
  optiondiv2.innerText = "in-progress";
  optiondiv2.setAttribute("value", "in-progress");
  selectdiv.appendChild(optiondiv2);
  const optiondiv3 = document.createElement("option");
  optiondiv3.setAttribute("value", "done");
  optiondiv3.innerText = "done";
  selectdiv.appendChild(optiondiv3);
  const optiondiv4 = document.createElement("option");
  optiondiv4.innerText = "blocked";
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
  trashsvgdiv.setAttribute("id", "trash");
  svgdiv.appendChild(trashsvgdiv);

  return list;
}

containerItems.forEach(({ title, count, id, color }) => {
  addTaskList(title, color, count, id);
});

input.addEventListener("click", (e) => {
  console.log("onclick", e.target.value);
});

button.addEventListener("click", () => {
  if (input.value) {
    todoData.push({
      text: input.value,
      pensvg: "./pen.svg",
      trashsvg: "./trash.svg",
      state: "in-progress",
    });
    removeTodoItems();
    input.value = null;
  }
});

function removeTodoItems() {
  const todoDiv = document.getElementById("todo-body");
  todoDiv.innerHTML = null;

  todoData.forEach((item, index) => {
    const itemDiv = generateItem(item.text, item.pensvg, item.trashsvg, index);
    const trashsvgdiv = itemDiv.querySelector("#trash");
    trashsvgdiv.addEventListener("click", () => {
      todoData.splice(index, 1);
      removeTodoItems();
    });
    todoDiv.appendChild(itemDiv);
  });
}
function switchState(index, value) {
  todoData[index].state = value;
  console.log(todoData[index]);
  console.log("INdex", index, value);
  const todoDiv = document.getElementById("todo-body");
  todoDiv.innerHTML = null;
  todoData.forEach((item, index) => {
    const itemDiv = generateItem(item.text, item.pensvg, item.trashsvg, index);
    const trashsvgdiv = itemDiv.querySelector("#trash");
    trashsvgdiv.addEventListener("click", () => {
      todoData.splice(index, 1);
      removeTodoItems();
    });
    todoDiv.appendChild(itemDiv);
  });
}
