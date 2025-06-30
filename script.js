document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("projectList");

    fetch("https://api.github.com/users/xavfli/repos")
        .then(res => res.json())
        .then(repos => {
            repos.forEach(repo => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "Tavsif mavjud emas."}</p>
                    <a href="${repo.html_url}" target="_blank">GitHubda ko‘rish</a>
                `;

                projectList.appendChild(card);
            });
        })
        .catch(error => {
            projectList.innerHTML = "<p>Loyihalarni yuklashda xatolik yuz berdi.</p>";
            console.error(error);
        });
});
