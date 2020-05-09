$(function () {
    $(document).click((e) => {
        const { target } = e;
        if (
            target.nodeName === "A" &&
            target.getAttribute("href") === "#"
        ) {
            e.preventDefault();
        }
    });
});