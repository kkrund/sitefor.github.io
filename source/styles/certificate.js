// certificate.js

document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const imagePath = "source/images/certificates/";
    const imageCount = 20;

    for (let i = 1; i <= imageCount; i++) {
        const div = document.createElement("div");
        div.className = i === 1 ? "carousel-item active" : "carousel-item";
        
        const img = document.createElement("img");
        img.src = `${imagePath}certificate${i}.jpg`;
        img.alt = `Сертификат ${i}`;

        div.appendChild(img);
        carouselInner.appendChild(div);
    }
});
