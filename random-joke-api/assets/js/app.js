const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn = document.querySelector(".btn");
const jokeText = document.querySelector(".card-txt");
async function getJoke() {
  jokeText.classList.remove("card-txt--fade");
  const jokeApi = await fetch(url);
  const jokeTxt = await jokeApi.json();
  jokeText.classList.add("card-txt--fade");
  jokeText.textContent = jokeTxt.joke;
}
btn.addEventListener("click", getJoke);
getJoke();
// console.log(fetch(url).then(res => res.json()));
