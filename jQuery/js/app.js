var x=0;
function addToDo(){
    console.log("Adding a new task");
    // get the value from input
    // var text=document.getElementById("txt-task").value;
    var text=$("#txt-task").val();  //jQuery version of line 4

    if (text!="") {
    console.log(text);
    $("#txt-task").val("");// clear the input
    // create the list item template
    var li=`<li id="${x}"> ${text} <button onclick="deleteToDo(${x});"> <i class="fas fa-trash-alt"></i> </button></li>`;
    x++;
    // display the li under the ul
    $("#pending-list").append(li);

    } else {
        alert("You have to enter a task");
    }
        // set the focus to the input
    $("#txt-task").focus();
}

function deleteToDo(id){
    console.log("delete function is working"+id);
    $("#"+id).remove();
}

function init(){
    console.log("Init the to do app");
    // sensing the user actions/events
    // document.getElementById("btn-add");
    $("#btn-add").click(addToDo);

    $("#txt-task").keypress(function(e){
        // console.log(e.key);              //logs the key pressed
        if (e.key==="Enter") {
            console.log("Add a new task");
            addToDo();
        }
    })
}

// when the browser finishes rendering the HTML, EXECUTE INIT
window.onload=init