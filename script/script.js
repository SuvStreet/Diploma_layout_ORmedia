window.onload = function () {
    document.querySelector(".carousel").onclick() = function () {
        document
            .querySelector(".active")
            .nextElementSibling.classList.add("minus");
        document
            .querySelector(".active")
            .previousElementSibling.classList.add("minus");
    };
};
