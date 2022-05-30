$("#add").click(function () {
    let title = $("#title").val();
    let desc = $("#description");
    var todo = `<div id="list-container">
    <form id="form-container">
        <input maxlength="30" id="title" type="text" value="${title}" readonly/>
        <textarea
          id="description"
          cols="30"
          rows="4"
          value = "${desc}"
        ></textarea>
        <div id="footer-container">
            <label id="date">28 05 2022</label>
            <div>
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
            </div>
            </div>
        </div>
      </form>
</div>`;
    if (title == "" || desc == ""){
        alert("Empty");
    } else {
    $("body").append(todo);
    console.log("success");
    }
})