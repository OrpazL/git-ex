'use strict';

// This is our controller it is responsible for rendering the view and action upon events
console.log('Todo');

function init() {
    createTodos();
    render();
}

function render() {
    renderTodos();
    renderStats();
    isListEmpty();
}

function renderTodos() {
    var todos = getTodos();
    var strHtmls = todos.map(function(todo) {
        return `<li class="${
            todo.isDone ? 'done' : ''
        }" onclick="onTodoClicked('${todo.id}')" onmouseover="showMovementBtns(this)" onmouseout="hideMovementBtns(this)">
                   ${todo.txt}
                   <button class="btn-delete" onclick="onDeleteTodo('${
                       todo.id
                   }', event)">
                   &times;
                   </button>
                   <button class="btns-movements btn-todoUp" onclick="todoUp('${
                       todo.id
                   }' , event)">&uparrow;</button>
                   <button class="btns-movements btn-todoDown" onclick="todoDown('${
                       todo.id
                   }' , event)">&downarrow;</button>
                </li>`;
    });
    document.querySelector('.todo-list').innerHTML = strHtmls.join('');
}

function renderStats() {
    document.querySelector('.todo-count').innerHTML = getTodoCount();
    document.querySelector('.active-count').innerHTML = getActiveCount();
}

function onTodoClicked(todoId) {
    toggleTodo(todoId);
    render();
}

function onSetFilter(statusFilter) {
    setFilter(statusFilter);
    if (!isListEmpty(statusFilter)) render();
}

function onSetSortFilter(sortby) {
    setSortFilter(sortby);
    render();
}

function onAddTodo() {
    var elNewTodo = document.querySelector('#newTodoTxt');
    var newTodoTxt = elNewTodo.value;
    if (newTodoTxt.trim() === '') {
        elNewTodo.classList.add('required');
        return;
    } else if (elNewTodo.classList.contains('required')) {
        elNewTodo.classList.remove('required');
    }

    var elImportanceSelector = document.querySelector('#importance-selector');
    var newTodoImportance = elImportanceSelector.value;
    if (newTodoImportance === '') {
        elImportanceSelector.classList.add('required');
        return;
    } else if (elImportanceSelector.classList.contains('required')) {
        elImportanceSelector.classList.remove('required');
    }
    addTodo(newTodoTxt, newTodoImportance);

    document.querySelector('h4').classList.add('animated', 'tada');
    setTimeout(function() {
        document.querySelector('h4').classList.remove('animated', 'tada');
    }, 1000);

    elNewTodo.value = '';
    render();
}

function onDeleteTodo(todoId, ev) {
    // Stop the propegation of the click event so the LI onclick will not trigger
    ev.stopPropagation();
    if (confirm('Are U Sure?')) {
        deleteTodo(todoId);
        render();
    }
}

function todoUp(todoId, ev) {
    // Stop the propegation of the click event so the LI onclick will not trigger
    ev.stopPropagation();
    if(moveTodoUp(todoId)) render();
}

function todoDown(todoId, ev) {
    // Stop the propegation of the click event so the LI onclick will not trigger
    ev.stopPropagation();
    if(moveTodoDown(todoId)) render();
}

function showMovementBtns(elTodo) {
    var elBtns = elTodo.querySelectorAll('.btns-movements');
    elBtns.forEach(function(elBtn) {  
       elBtn.classList.add('visible')
    })
}

function hideMovementBtns(elTodo) {
    var elBtns = elTodo.querySelectorAll('.btns-movements');
    elBtns.forEach(function(elBtn) {  
       elBtn.classList.remove('visible')
    })
}