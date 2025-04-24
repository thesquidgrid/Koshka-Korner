function buttonShadow(element) {
    element.style.boxShadow = "0px 0px 10px orange";
    element.style.zIndex = "9999";
    setTimeout(() => {
        element.style.boxShadow = "0px 0px 0px rgba(255, 166, 0, 0)";
    }, 500);
}