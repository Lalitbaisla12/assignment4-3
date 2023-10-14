
function generateRandomList() {
    var randomList = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 10; i++) {
        var randomWord = '';
        for (var j = 0; j < 5; j++) {
            randomWord += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        randomList.push(randomWord);
    }
    return randomList;
}

function displayRandomList() {
    var randomList = generateRandomList();
    var listContainer = document.getElementById('random-list');
    listContainer.innerHTML = ''; 
    randomList.forEach(function (word) {
        var listItem = document.createElement('li');
        listItem.textContent = word;
        listContainer.appendChild(listItem);
    });
}

function filterList() {
    var filterInput = document.getElementById('filterInput').value.toLowerCase();
    var listItems = document.querySelectorAll('#random-list li');
    listItems.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(filterInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

window.onload = displayRandomList;

document.getElementById('filterInput').addEventListener('input', filterList);
