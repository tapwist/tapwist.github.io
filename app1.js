"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;

var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

var total = document.querySelector('.statistic__total');
var done = document.querySelector('.statistic__done');
var left = document.querySelector('.statistic__left');

// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo'
    }
];

// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');
    return newElement;
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

function onListClick(event) {
    var target = event.target;
    var element;

    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
    }
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);
	stats();
}

function deleteTodo(element) {
	listElement.removeChild(element);
	stats();
}

function onInputKeydown(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    var todoName = inputElement.value.trim();

    if (todoName.length === 0 || checkIfTodoAlreadyExists(todoName)) {
        return;
    }

    var todo = createNewTodo(todoName);
    insertTodoElement(addTodoFromTemplate(todo));
    inputElement.value = '';
	stats();
}

function checkIfTodoAlreadyExists(todoName) {
    var todoElements = listElement.querySelectorAll('.task__name');
    var namesList = Array.prototype.map.call(todoElements, function (element) {
        return element.textContent;
    });
    return namesList.indexOf(todoName) > -1;
}

function createNewTodo(name) {
    return {
        name: name,
        status: 'todo'
    }
}

todoList
    .map(addTodoFromTemplate)
    .forEach(insertTodoElement);

listElement.addEventListener('click', onListClick);

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

// Задача:
// исправьте багу с добавлением insertBefore в пустой массив
// создайте статистику
function insertTodoElement(elem) {
    if (listElement.children) {
        listElement.insertBefore(elem, listElement.firstElementChild);
    } else {
        listElement.appendChild(elem);
    }
}

//статистика + начальная
stats();
function stats() {
	return (total.textContent = itemElementList.length,
	done.textContent = listElement.querySelectorAll('.task_done').length,
	left.textContent = total.textContent - done.textContent)
}

// Фильтры:
var filtr = document.querySelectorAll('[data-filter]');
filtr[0].onclick = function() {
	filtr[0].classList.add('filters__item_selected');
	filtr[1].classList.remove('filters__item_selected');
	filtr[2].classList.remove('filters__item_selected');
	for (var i = 0; i < itemElementList.length; i++) {
		itemElementList[i].style.display = '';
	}
}

filtr[1].onclick = function() {
	filtr[0].classList.remove('filters__item_selected');
	filtr[1].classList.add('filters__item_selected');
	filtr[2].classList.remove('filters__item_selected');
	for (var i = 0; i < itemElementList.length; i++) {
		(itemElementList[i].classList.contains('task_done')) ? 
		itemElementList[i].style.display = '' : itemElementList[i].style.display = 'none';
	}
}

filtr[2].onclick = function() {
	filtr[0].classList.remove('filters__item_selected');
	filtr[1].classList.remove('filters__item_selected');
	filtr[2].classList.add('filters__item_selected');
	for (var i = 0; i < itemElementList.length; i++) {
		(itemElementList[i].classList.contains('task_todo')) ? 
		itemElementList[i].style.display = '' : itemElementList[i].style.display = 'none';
	}
}
