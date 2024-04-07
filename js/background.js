const images = ["pexels-francesco-ungaro-2325447.jpg", "pexels-stein-egil-liland-1933239.jpg", "pexels-pixabay-417173.jpg", "pexels-eberhard-grossgasteiger-572897.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bgImage");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);