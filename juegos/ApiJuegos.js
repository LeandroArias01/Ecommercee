document.addEventListener('DOMContentLoaded', () => {

    fetch('https://api.rawg.io/api/games?key=8d1b028c7e834a8eb4d48f492f8a4d32&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then(response => response.json())
        .then(data => {
            let games = data.results;

            games = games.filter(game => game.name !== 'Blasphemous');

            games = games.slice(0, 16);

            const gameList = document.getElementById('games');

            games.forEach(game => {
                const colDiv = document.createElement('div');
                colDiv.classList.add('col-md-4', 'mb-4');

                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');

                const gameImage = document.createElement('img');
                gameImage.src = game.background_image;
                gameImage.alt = game.name;
                gameImage.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const gameTitle = document.createElement('h4');
                gameTitle.classList.add('card-title');
                gameTitle.textContent = game.name;

                const gameDescription = document.createElement('p');
                gameDescription.classList.add('card-text');
                gameDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, doloremque! Maiores soluta vitae fugit laboriosam ullam impedit doloribus alias. Earum ea reiciendis rem ipsa ab eius unde magnam tempore. Iusto.";

                const gameButton = document.createElement('button');
                gameButton.classList.add('submit')
                gameButton.textContent = "Agregar al carrito";
                
                

                cardBody.appendChild(gameTitle);
                cardBody.appendChild(gameDescription);
                cardDiv.appendChild(gameImage);
                cardDiv.appendChild(cardBody);
                colDiv.appendChild(cardDiv);
                gameList.appendChild(colDiv);
                cardBody.appendChild(gameButton);
                

            });
        })
        .catch(error => {
            console.error('Error al obtener los juegos:', error);
        });
});
