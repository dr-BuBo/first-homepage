const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const userPicture = document.getElementById('api');
                userPicture.src = user.picture.large;
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });