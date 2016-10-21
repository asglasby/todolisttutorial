"use strict";  // This forces "strict mode" and helps to avoid common errors like creating variables without declaring them.

var myTodoItems = ["Study JavaScript", "Walk the Dog", "Practice Coding"];   // This is the array that will hold our Todo Items


var addItem = function () {
    if(document.getElementById('todoItem').value === ""){
        alert("Please add an item");
    } else {
        var addTodoItem = document.getElementById('todoItem').value;
        myTodoItems.push(addTodoItem);
        document.getElementById('todoItem').value = "";
        displayItems();
    }    
};

var displayItems = function () {
    document.getElementById('editItems').innerHTML = "";
    document.getElementById('displayItems').innerHTML = "";
    for (var i = 0; i < myTodoItems.length; i++) {
        document.getElementById('displayItems').innerHTML += '<div>' + myTodoItems[i] + '<button class="btn btn-danger" onclick="deleteItem('+i+');">Delete</button></div>'  
    }

};

var deleteItem = function (i) {
    myTodoItems.splice(i, 1);
    displayItems();
};

var editItem = function () {
    document.getElementById('editItems').innerHTML = '<button class="btn btn-success" onclick="saveItem();">Save</button>';
    document.getElementById('displayItems').innerHTML = "";
    for (var i = 0; i < myTodoItems.length; i++) {
        document.getElementById('editItems').innerHTML += '<div class="well"><input id="editItem' + i +'" value="'+ myTodoItems[i] +'" /></div>'
    }
};

var saveItem = function () {
    for (var i = 0; i < myTodoItems.length; i++) {
        var saveChanges = document.getElementById('editItem' + i).value;
        myTodoItems[i] = saveChanges;
    }
    displayItems();
};

displayItems();