const createNoteInput = document.querySelector(".create-note-input");

createNoteInput.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('noteId');

console.log(noteId);