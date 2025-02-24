const galleryItems = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector("[gallery]");
const lightbox = document.querySelector("[lightbox]");
const galleryImage = document.querySelector("[galleryImage]");
const lightboxButton = document.querySelector("[galleryCloseBtn]");
const lightboxOverlay = document.querySelector("[lightboxOverlay]");

gallery.innerHTML = galleryItems
  .map(
    (item, index) => `<img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" data-index="${index}"/>`
  )
  .join("");

const allImages = document.querySelectorAll(".gallery__image");
let targetIndex = 0;

const openLightbox = (index) => {
  if (galleryItems[index]) {
    galleryImage.src = galleryItems[index].original;
    lightbox.classList.add("is-open");
    targetIndex = index;
  } else {
    console.error("Індекс не існує!");
  }
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
};

gallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest(".gallery__image");
  if (clickedImage) {
    const imageLink = clickedImage.dataset.source;
    targetIndex = parseInt(clickedImage.dataset.index);
    openLightbox(targetIndex);
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight" && targetIndex < galleryItems.length - 1) {
    targetIndex++;
    galleryImage.src = galleryItems[targetIndex].original;
  } else if (event.key === "ArrowLeft" && targetIndex > 0) {
    targetIndex--;
    galleryImage.src = galleryItems[targetIndex].original;
  }
});

lightboxButton.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);