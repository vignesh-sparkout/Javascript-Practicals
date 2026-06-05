let db;
const databaseName = 'vickyDB';
const storeName = 'storeList';

const input = document.getElementById('input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');
const statusText = document.getElementById('status');

function openDatabase() {
    const dbrequest = indexedDB.open(databaseName, 3);

    dbrequest.onupgradeneeded = function(event) {
        db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, {
                keyPath: 'id',
                autoIncrement: true
            });
        }
    };

    dbrequest.onsuccess = function(event) {
        db = event.target.result;
        addButton.disabled = false;
        statusText.textContent = '';
        updateList();
    };

    dbrequest.onerror = function(event) {
        console.log('IndexedDB Error', event.target.error);
        statusText.textContent = 'Database could not open.';
    };

    dbrequest.onblocked = function() {
        statusText.textContent = 'Close other tabs using this page and refresh.';
    };
}

function addItem(item) {
    if (!db) {
        statusText.textContent = 'Database is still opening.';
        return;
    }

    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.add({
        task: item,
        createdAt: Date.now()
    });

    transaction.oncomplete = function() {
        updateList();
    };

    request.onerror = function(event) {
        console.log('Add Item Error', event.target.error);
        statusText.textContent = 'Could not add task.';
    };
}

function deleteItem(id) {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    const request = store.delete(id);

    transaction.oncomplete = function() {
        updateList();
    };

    request.onerror = function(event) {
        console.log('Delete Item Error', event.target.error);
        statusText.textContent = 'Could not delete task.';
    };
}

function updateList() {
    if (!db) {
        return;
    }

    list.innerHTML = '';

    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const request = store.openCursor();
    let hasItems = false;

    request.onsuccess = function(event) {
        const cursor = event.target.result;

        if (cursor) {
            hasItems = true;
            createTaskElement(cursor.key, cursor.value.task);
            cursor.continue();
            return;
        }

        if (!hasItems) {
            showEmptyMessage();
        }
    };

    request.onerror = function(event) {
        console.log('List Error', event.target.error);
        statusText.textContent = 'Could not load tasks.';
    };
}

function createTaskElement(id, task) {
    const item = document.createElement('li');
    const text = document.createElement('span');
    const deleteButton = document.createElement('button');

    item.className = 'task-item';
    text.className = 'task-text';
    text.textContent = task;
    deleteButton.className = 'delete-btn';
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        deleteItem(id);
    });

    item.append(text, deleteButton);
    list.appendChild(item);
}

function showEmptyMessage() {
    const emptyItem = document.createElement('li');
    emptyItem.className = 'empty-item';
    emptyItem.textContent = 'No tasks yet.';
    list.appendChild(emptyItem);
}

function handleAddItem() {
    const item = input.value.trim();

    if (!db) {
        statusText.textContent = 'Database is still opening.';
        return;
    }

    if (item) {
        addItem(item);
        input.value = '';
    } else {
        alert('Enter a Value');
    }
}

window.addEventListener('load', openDatabase);

addButton.addEventListener('click', handleAddItem);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleAddItem();
    }
});
