console.log(
  window.getComputedStyle(document.documentElement).getPropertyValue("--box-bg")
);
console.log(
  window.getComputedStyle(document.body).getPropertyValue("--box-bg")
);
console.log(document.body.style.getPropertyValue("--box-bg"));
console.log(document.body.style.setProperty("--box-bg", "red"));
console.log(
  document.querySelector(".box").style.setProperty("--box-bg", "green")
);
