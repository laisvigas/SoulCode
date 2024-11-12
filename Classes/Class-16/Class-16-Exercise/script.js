const smallImages = document.querySelectorAll(".smallImage");
const largeImage = document.getElementById("largeImage");

smallImages.forEach(img => {
    img.addEventListener("click", () => {
        largeImage.src = img.src;
    });
});
