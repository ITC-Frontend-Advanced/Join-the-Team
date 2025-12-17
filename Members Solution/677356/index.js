const imgs = document.querySelectorAll(".gallery-item img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

imgs.forEach((img, i) => {
  img.onclick = () => {
    index = i;
    popupImg.src = img.src;
    popup.style.display = "flex";
  };
});

prevBtn.onclick = (e) => {
  index = (index - 1 + imgs.length) % imgs.length;
  popupImg.src = imgs[index].src;
  e.stopPropagation();
};

nextBtn.onclick = (e) => {
  index = (index + 1) % imgs.length;
  popupImg.src = imgs[index].src;
  e.stopPropagation();
};

popup.onclick = () => popup.style.display = "none";