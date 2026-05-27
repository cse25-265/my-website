document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.03)";
        });
        card.addEventListener("mouseout", function () {
            card.style.transform = "scale(1)";
        });
    });
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully!");
        });
    }
});
