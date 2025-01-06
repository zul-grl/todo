const containerItems = [
  { title: "To do", count: 0, color: "white", id: "todo" },
  { title: "In progress", count: 0, color: "yellow", id: "in-progress" },
  { title: "Done", count: 0, color: "green", id: "done" },
  { title: "Blocked", count: 0, color: "red", id: "blocked" },
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
    todoData[index].state = event.target.value;
    removeTodoItems();
  });

  const states = ["todo", "in-progress", "done", "blocked"];
  states.forEach((state) => {
    const optiondiv = document.createElement("option");
    optiondiv.setAttribute("value", state);
    optiondiv.innerText = state.replace("-", " ");
    selectdiv.appendChild(optiondiv);
  });

  selectdiv.value = todoData[index].state;
  selectdiv.addEventListener("change", (event) => {
    todoData[index].state = event.target.value;
    removeTodoItems();
  });

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

  pensvgdiv.addEventListener("click", () => {
    const newText = prompt("Edit task text:", text);
    if (newText && newText !== text) {
      todoData[index].text = newText;
      removeTodoItems();
    }
  });

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
      state: "todo",
    });

    removeTodoItems();
    input.value = null;
  }
});

function removeTodoItems() {
  containerItems.forEach(({ id }) => {
    const listBody = document.getElementById(`${id}-body`);
    const countElement = document.querySelector(`#${id} .count`);

    if (listBody) {
      listBody.innerHTML = "";
    }

    const filteredTasks = todoData.filter((task, index) => {
      task.index = index;
      return task.state === id;
    });

    filteredTasks.forEach((item) => {
      const itemDiv = generateItem(
        item.text,
        item.pensvg,
        item.trashsvg,
        item.index
      );
      const trashsvgdiv = itemDiv.querySelector("#trash");
      trashsvgdiv.addEventListener("click", () => {
        todoData.splice(item.index, 1);
        removeTodoItems();
      });
      listBody.appendChild(itemDiv);
    });

    if (countElement) {
      countElement.innerText = filteredTasks.length;
    }
  });
}
