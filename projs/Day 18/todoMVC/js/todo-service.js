'use strict';
const KEY_TODOS = 'todos';

var gTodos;
var gTodosFilter = 'all';

function createTodos() {
    var todos = getFromStorage(KEY_TODOS);
    gTodos = todos
        ? todos
        : [];
}
function createTodo(txt) {
    return {
        id: makeId(),
        txt: txt,
        isDone: false,
        importance: 1,
        created: createdAt()
    };
}

function getTodos() {
    return gTodos.filter(function(todo) {
        return (
            gTodosFilter === 'all' ||
            (gTodosFilter === 'done' && todo.isDone) ||
            (gTodosFilter === 'active' && !todo.isDone)
        );
    });
}

function addTodo(todoTxt, todoImportance) {
    gTodos.unshift(createTodo(todoTxt));
    gTodos[0].importance = todoImportance;
    saveToStorage(KEY_TODOS, gTodos);
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function(todo) {
        return todo.id === todoId;
    });
    todo.isDone = !todo.isDone;
    saveToStorage(KEY_TODOS, gTodos);
}

function setFilter(statusFilter) {
    gTodosFilter = statusFilter;
}

function getCurrFilter() {
    return document.querySelector('#todo-filter').value;
}

function setSortFilter(sortby) {
    switch (sortby) {
        case 'txt':
            gTodos.sort(function(a, b) {
                return (a.txt > b.txt) ? 1 : ((b.txt > a.txt) ? -1 : 0);
            });
            console.log(sortby);
            break;

        case 'created':
            gTodos.sort(function(a, b) {
                return a.created - b.created;
            });
            console.log(sortby);
            break;
        case 'importance':
            gTodos.sort(function(a, b) {
                return a.importance - b.importance;
            });
            console.log(sortby);
            break;
    }
}


function getTodoCount() {
    return gTodos.length;
}
function getActiveCount() {
    return gTodos.filter(function(todo) {
        return !todo.isDone;
    }).length;
}

function createdAt() {
    return Date.now();
}

function isListEmpty(statusFilter) {
    if (!statusFilter) var statusFilter = getCurrFilter();
    var elTodoList = document.querySelector('.todo-list');
    var elSortBy = document.querySelector('#todo-filter');
    if ((!gTodos || gTodos.length === 0) && elSortBy.value === 'all') {
        elTodoList.innerHTML = `<li>
        <h4>No ${(statusFilter == 'all')? '' : statusFilter + ' '}todos.</h4>
        </li>`;
        return true;
    } else if (gTodos.every(function (todo) {
        return todo.isDone;
    }) && elSortBy.value === 'active') {
        elTodoList.innerHTML = `<li>
        <h4>No ${(statusFilter == 'all')? '' : statusFilter + ' '}todos.</h4>
        </li>`;
        return true;
    } else if (gTodos.every(function (todo) {
        return !todo.isDone;
    }) && elSortBy.value === 'done') {
        elTodoList.innerHTML = `<li>
        <h4>No ${(statusFilter == 'all')? '' : statusFilter + ' '}todos.</h4>
        </li>`;
        return true;
    } else return false;
}

function deleteTodo(todoId) {
    var todoIdx = gTodos.findIndex(function(todo) {
        return todo.id === todoId;
    });
    gTodos.splice(todoIdx, 1);
    saveToStorage(KEY_TODOS, gTodos);
    isListEmpty();
}

function moveTodoUp(todoId) {
    var todoIdx = gTodos.findIndex(function(todo) {
        return todo.id === todoId;
    });
    if (todoIdx === 0) return false;
    var temp = gTodos[todoIdx-1];
    gTodos[todoIdx-1] = gTodos[todoIdx];
    gTodos[todoIdx] = temp;
    return true;
}

function moveTodoDown(todoId) {
    var todoIdx = gTodos.findIndex(function(todo) {
        return todo.id === todoId;
    });
    if (todoIdx === gTodos.length-1) return false;
    var temp = gTodos[todoIdx+1];
    gTodos[todoIdx+1] = gTodos[todoIdx];
    gTodos[todoIdx] = temp;
    return true;
}