var id = 0;


$("#add").click(() => {
    let title = $("#title").val();
    let description = $("#description").val();
    var todo = new List(title, description)
    todo.add_todo();
    console.log(todo)
})

class List {

    constructor(title, description){
        this.id = Math.floor(Math.random() * 100);
        this.title = title;
        this.description = description;
        this.div = $(`<div id="${this.id}"></div>`);
        var today = new Date();
        this.time = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}  ${today.getHours()}:${today.getMinutes()}`;
    }


    add_todo() {

        let todo_div = 
        `<div id="list-container">
        <form id="form-container">
        <input maxlength="30" class="title" id="title${this.id}" type="text" placeholder="Title" value = "${this.title}"readonly/>
        <textarea maxlength="150" name="description" id="description" cols="30" rows="4" placeholder="Description">${this.description}</textarea>
        <div id="footer-container">
        <label id="date">${this.time}</label>
        <div>
        <button type="button" class="edit" id="edit${this.id}">Edit</button>
        <button type="button" onclick="deleteTodo(${this.id})" class="delete">Delete</button>
        </div>
        </div>
        </div>
        </form>`;

        $("body").append(this.div.append(todo_div));

        localStorage.setItem(`title${this.id}`,this.title);

        $(".edit").click(() => {
            console.log("clicked")
            document.getElementById(`title${this.id}`).removeAttribute("readonly");

        })

    }
}


function deleteTodo(id) {
    $("#" + id).remove();
}

function editTodo() {
    
}