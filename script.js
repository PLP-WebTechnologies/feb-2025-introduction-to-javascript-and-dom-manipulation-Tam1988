const title = document.getElementById("title");
  title.textContent = "You Are Welcome";

const text = document.getElementById("text");
text.style.color = "yellow";  
text.style.fontSize = "50px";

const button = document.getElementById("btn");
  const welcome = document.getElementById("welcome");

  button.addEventListener("click", () => {
    welcome.textContent = "You clicked the button!";
  });
