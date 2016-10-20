"use strict";

var myTodoItems = ["Study JavaScript", "Walk the Dog", "Practice Coding"];

var addItem = function () {
    var addTodoItem = document.getElementById('todoItem').value;
    myTodoItems.push(addTodoItem);
    document.getElementById('todoItem').value = "";
    displayItems();
};

var displayItems = function () {
    document.getElementById('displayItems').innerHTML = "";
    for (var i = 0; i < myTodoItems.length; i++) {
        document.getElementById('displayItems').innerHTML += '<div>' + myTodoItems[i] + '</div><div><button class="btn btn-danger" onclick="deleteItem('+i+');">Delete</button>'  
    }

};

displayItems();