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
        this.id = Math.floor(Math.random() * Date.now());
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
        <input maxlength="30" class="title" id="title${this.id}" type="text" value = "${this.title}" readonly/>
        <textarea maxlength="150" class="description" id="desc${this.id}" cols="30" rows="3" readonly>${this.description}</textarea>
        <div id="footer-container">
        <label id="date">${this.time}</label>
        <div>
        <button type="button" onclick="editTodo(${this.id})" class="edit" id="edit${this.id}">Edit</button>
        <button type="button" onclick="deleteTodo(${this.id})" class="delete">Delete</button>
        </div>
        </div>
        </div>
        </form>`;

        $("body").append(this.div.append(todo_div));
        localStorage.setItem(this.id, [this.title, this.description]);
    }
}


function deleteTodo(id) {
    $("#" + id).remove();
    localStorage.removeItem(id)
}


function editTodo(id) {
    let edit_btn = $("#edit" + id);
    let title = $("#title" + id);
    let desc = $("#desc" + id);

    if (edit_btn.text() == "Edit"){
        edit_btn.text("Save");
        title.attr("readonly", false);
        desc.attr("readonly", false);
    };


    if (edit_btn.text() == "Save"){
        edit_btn.click(() => {
            localStorage.setItem(id, [title.val(), desc.val()])
            edit_btn.text("Edit");
            title.attr("readonly", true);
            desc.attr("readonly", true);
        })
    };
    
}