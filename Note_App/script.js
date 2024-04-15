let notes = [];

function addNote() {
    const noteText = document.getElementById('noteText').value;

    if (noteText.trim() !== '') {
        notes.push(noteText);
        displayNotes();
        document.getElementById('noteText').value = '';
    } else {
        alert('Please enter a note.');
    }
}

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteNote(index);

        li.appendChild(deleteButton);
        noteList.appendChild(li);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

window.onload = displayNotes;
