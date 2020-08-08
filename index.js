const DisplayContent = (() => {
  const newGif = (input) => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=MNpQ9SbsZqpf2IZoMfYiPOMk59bHh4QB&tag=${input}&rating=r`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => (gif.src = response.data.images.original.url))
      .catch(
        () =>
          (gif.src = "https://media.giphy.com/media/pLcgO003rbeo0/giphy.gif")
      );
  };

  const root = document.getElementById("root");

  let title = document.createElement("h1");
  title.innerText = "GIF ME UP!!";

  let gifdiv = document.createElement("div");
  gifdiv.classList.add("imgdiv");
  let gif = document.createElement("img");
  newGif("cat", gif);
  gifdiv.appendChild(gif);

  let search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Filter results by specified word";

  let button = document.createElement("button");
  button.type = "button";
  button.innerText = "GIF IT TO ME BABY";
  button.addEventListener("click", () => {
    newGif(search.value, gif);
  });

  let content = [title, gifdiv, search, button];

  content.forEach((elm) => root.appendChild(elm));
})();
