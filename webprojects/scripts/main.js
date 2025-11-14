const myHeading = document.querySelector("h1");
if (myHeading) {
  myHeading.textContent = "Hello, world!";
}

const myImage = document.querySelector("img");
if (myImage) {
  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (
      mySrc ===
      "../img/u=273222448,225449124&fm=253&fmt=auto&app=138&f=JPEG.webp"
    ) {
      myImage.setAttribute(
        "src",
        "../img/1ad2cc7b02087bf4e6f6033f5fbb4d1b.jpg"
      );
    } else {
      myImage.setAttribute(
        "src",
        "../img/u=273222448,225449124&fm=253&fmt=auto&app=138&f=JPEG.webp"
      );
    }
  };
}
