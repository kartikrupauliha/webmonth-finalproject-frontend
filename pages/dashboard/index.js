const cardContainer = document.querySelector('.card-container');

const cardData = [{
        heading: "heading1",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione atque voluptas dolore facilis harum labore dolorum saepe, culpa deserunt consectetur recusandae, perspiciatis commodi iure velit praesentium soluta ab, quo sed. Dolor iusto tempora enim ut, neque beatae voluptates, nulla non nesciunt aspernatur aliquid est, ratione ex mollitia odio ullam quam.",
        id: 1
    },
    {
        heading: "heading2",
        content: "gsdfsfsdfdfsfds",
        id: 2
    },
    {
        heading: "heading3",
        content: "gsdfsfsdfdfsfds",
        id: 3
    },
    {
        heading: "heading4",
        content: "gsdfsfsdfdfsfds",
        id: 4
    },
    {
        heading: "heading5",
        content: "gsdfsfsdfdfsfds",
        id: 5
    },
    {
        heading: "heading6",
        content: "gsdfsfsdfdfsfds",
        id: 6
    },
    {
        heading: "heading7",
        content: "gsdfsfsdfdfsfds",
        id: 7
    },
];

const createNotes = (array) => {
    array.forEach(cardObj => {
        const {
            heading,
            content,
            id
        } = cardObj;

        const card = document.createElement("div")
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="" /></div></a></div><div class="card-content">${content}</div>`

        card.innerHTML = insideHtml;
        cardContainer.appendChild(card);
    })
};

createNotes(cardData);

const body = document.querySelector("body");

window.addEventListener("load", () => {
    body.classList.add("visible");
});