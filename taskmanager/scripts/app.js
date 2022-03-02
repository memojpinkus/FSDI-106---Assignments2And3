var nonImportantClass = "far fa-start";
var importantClass = "fas fa-start";
var isImportant = false;
var isFormVisible = false;
$("#show").hide();

function toggleImportant(){
    console.log("Icon clicked!")

    if(isImportant){
        //non important
        isImportant=false;
        $("#iImportant").removeClass(importantClass);
        $("#iImportant").addClass(nonImportantClass);
    }
    else{
        //important
        $("#iImportant").removeClass(nonImportantClass);
        $("#iImportant").addClass(importantClass);
        isImportant=true;
    }
}

function toggleVisible(){
    console.log("Visible click")

    if(isFormVisible){
        isFormVisible = false;
        $("#hide").hide();
        $("#show").show();
        $(".control").hide();
    }
    else{
        isFormVisible = true;
        $("#hide").show();
        $("#show").hide();
        $(".control").show();
    }
}

function saveTask(){
    console.log("Saving task...");

    let title = $("#txtTitle").val();
    let date = $("#selDate").val();
    let contact = $("#txtContact").val();
    let location = $("txtLocation").val();
    let desc = $("#txtDescription").val();
    let color = $("#selColor").val();

    //validate
    if(title.length<5){
        //show an error
        alert("title should be at least 5 chars long");
        return;
    }

    if(!date){
        //show an error
        alert("Due date is required");
        return;
    }

    let task = new Task(isImportant, title, date, contact, location, desc, color);

    console.log(task);

    //save the task

    //display
    displayTask(task);

    //clear form
    document.getElementById("txtTitle").value ="";
    document.getElementById("txtContact").value = "";
    document.getElementById("txtLocation").value = "";
    document.getElementById("txtDescription").value = "";
}

function displayTask(task){
    //create the syntax
    let syntax = `<div class="task">
        <h5>${task.title}</h5>
        <p>${task.desc}</p>
        <label class="date">${task.dueDate}</label>
        <label class="location">${task.location}</label>
        <label class="contact">${task.contact}</label>
        <button onclick="deleteTask()" class="btn btn-sm btn-danger">Remove</button>
    </div>`;

    //append the xyntax to an element on the screen
    $("#tasks-list").append(syntax);
}

function deleteTask(){
    console.log("deleting task...");
    let title = $("#txtTitle").val("");
    let date = $("#selDate").val("");
    let contact = $("#txtContact").val("");
    let location = $("txtLocation").val("");
    let desc = $("#txtDescription").val("");
    let color = $("#selColor").val("");
}

function init(){
    console.log("Task manager");

    //events
    $("#iImportant").click(toggleImportant);
    $("#show").click(toggleVisible);
    $("#hide").click(toggleVisible);
    $("#btnSave").click(saveTask);

    //load data
}

window.onload = init;