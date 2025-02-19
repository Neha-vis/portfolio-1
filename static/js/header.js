const stickyHeader = () => {
  const header = document.querySelector("#header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
window.addEventListener("scroll", stickyHeader);
