const sizeElements = document.querySelectorAll(".size-s");

sizeElements.forEach((sizeElement) => {
  sizeElement.addEventListener("click", () => {
    // remove the active class from all size elements
    sizeElements.forEach((sizeElement) => {
      sizeElement.classList.remove("active");
    });

    // add the active class to the clicked size element
    sizeElement.classList.add("active");
  });
});
