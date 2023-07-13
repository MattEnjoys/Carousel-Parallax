const data = [
    {
        country: "The North Island - New Zealand",
        place: "Glwworm caves",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem quo?",
        img: "back1.jpg",
    },
    {
        country: "Denizli - Turkey",
        place: "Pamukkale casle",
        description: "Discover the historic city of Rome.",
        img: "back6.jpg",
    },
    {
        country: "South Tyrol - Italy",
        place: "Pragser Wildsee",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem quo?",
        img: "back5.jpg",
    },
    {
        country: "Kumamoto - Japan",
        place: "Kumamoto Castel",
        description: "Explore the beautiful city of Denizil.",
        img: "back4.jpg",
    },
    {
        country: "California - USA",
        place: "Sepulveda dam",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem quo?",
        img: "back3.jpg",
    },
    {
        country: "Alaska - USA",
        place: "Kenai Fjords Park",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatem quo?",
        img: "back6.jpg",
    },
];
// Sélection des éléments HTML à mettre à jour
const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

// Mise à jour du contenu HTML de l'introduction et des numéros ordinaux
introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    // Génération du HTML pour chaque élément de données
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx: 0">${data[i].country}</h5>
            </span>
            <span>
                <h1 class="place" style="--idx: 1">${data[i].place}</h1>
            </span>
            <span>
                <p class="description" style="--idx: 2">${data[i].description}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 3">
                    Discover now
                </button>
            </span>
        </div>
    `;
    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}

// Ajout de la classe "active" au premier élément de l'introduction et des numéros ordinaux
introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

// Mise à jour de la liste de vignettes avec les images
const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");
thumbnailListWrapper.innerHTML = "";

// Génération des vignettes pour toutes les images
for (let i = 0; i < data.length; i++) {
    thumbnailListWrapper.innerHTML += `
        <div class="thumbnail ${i === 0 ? "zoom" : ""}" style="--idx: ${i}">
            <img src="${data[i].img}" alt="">
        </div>
    `;
}

// Gestion du bouton "Next" pour faire défiler les images
const nextBtn = document.querySelector(".navigation .next-button");
let currentIndex = 0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    // Clonage de la première vignette et suppression de la classe "zoom"
    let clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    // Ajout du clone à la fin de la liste
    thumbnailListWrapper.appendChild(clone);
    // Ajout de la classe "zoom" à la deuxième vignette
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        // Suppression de la première vignette après une courte attente
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);
    // Mise à jour des indices des vignettes restantes
    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    // Mise à jour de l'indice courant
    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    // Mise à jour des classes "active" pour l'introduction et les numéros ordinaux
    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
