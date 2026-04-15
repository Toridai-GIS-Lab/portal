const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const background = document.getElementById("background");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  background.classList.toggle("active");
});

background.addEventListener("click", () => {
  nav.classList.remove("active");
  background.classList.remove("active");
});

fetch('news.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("news-list");

    // 最新1件だけ表示（トップページ用）
    const latest = data[0];

    const li = document.createElement("li");

    li.innerHTML = `
      <time datetime="${latest.date}">
        ${latest.date.replace(/-/g, "/")}
      </time>
      <span>${latest.text}</span>
    `;

    list.appendChild(li);
  });
