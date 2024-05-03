const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = documnet.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="/laptop-on-desk.jpg" alt="" />`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
    at.`;
  profile_img.innerHTML = `<img
    src="https://randomuser.me/api/portraits/women/40.jpg"
    alt="user"
  />`;
  name.innerHTML = "Max Calfield";
  data.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.remove("animated-bg-text"));
}
