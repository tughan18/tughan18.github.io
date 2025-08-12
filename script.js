fetch('links.json')
    .then(response => {
        if (!response.ok) throw new Error("Link dosyası yüklenemedi");
        return response.json();
    })
    .then(data => {
        const container = document.getElementById("links-container");
        container.innerHTML = ""; // Temizle

        data.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category");

            const title = document.createElement("h2");
            title.textContent = category.category;
            categoryDiv.appendChild(title);

            const linksList = document.createElement("div");
            linksList.classList.add("links");

            category.links.forEach(link => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.name;
                a.target = "_blank";
                linksList.appendChild(a);
            });

            categoryDiv.appendChild(linksList);
            container.appendChild(categoryDiv);
        });
    })
    .catch(error => {
        document.getElementById("links-container").innerHTML = "<p>Linkler yüklenemedi.</p>";
        console.error(error);
    });
