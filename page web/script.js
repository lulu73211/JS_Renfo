document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://randomuser.me/api/?results=100";
    let users = []; // Tableau permettant de stocker la liste des utilisateurs

    // La fonction permet d'afficher un utilisateur aléatoire
    function showAlertWithRandomUser() {
        if(users.length) {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            alert(`Prénom : ${randomUser.name.first}\nNom : ${randomUser.name.last}\nTéléphone : ${randomUser.phone}`);
        }
    }

    // Récupérer la liste des utilisateurs
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            users = data.results;
            const userList = document.getElementById("userList");

            users.forEach(user => {
                userList.innerHTML += `
                    <div class="col-md-3 mb-4">
                        <div class="card">
                            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">
                            <div class="card-body">
                                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                                <p class="card-text">${user.phone}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        });

    // Associer le bouton à la fonction
    const randomUserButton = document.getElementById("randomUserButton");
    randomUserButton.addEventListener("click", showAlertWithRandomUser);
});
