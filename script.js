document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.github.com/users/xavfli/repos")
    .then(response => response.json())
    .then(repos => {
      const list = document.getElementById("projects-list");
      repos.slice(0, 6).forEach(repo => {
        const div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "Loyiha haqida ma’lumot mavjud emas."}</p>
          <a href="${repo.html_url}" target="_blank">GitHubda ko‘rish</a>
        `;
        list.appendChild(div);
      });
    });
});
