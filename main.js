
class ApiFetch {

        async users () {
        const url = "https://mocki.io/v1/d6cdabfa-c890-44c1-88cb-11ec56e3faf7"
        const response = await fetch (url)
        const users = await response.json();
        return users;
    }
}


class Render {
    static async renderUsers() {
        const apiFetch = new ApiFetch();
        const users = await apiFetch.users();
        
        const cardsContainer = document.querySelector('.cardContainer');

        users.forEach(user => {
            const cardContainer = document.createElement('div')
            cardsContainer.appendChild(cardContainer);

            const profilePicture = document.createElement('img');
            profilePicture.src = 'images/garygygax_2.jpg';
            profilePicture.classList.add('profilePicture')
            cardContainer.append(profilePicture);

            const cardProfileName = document.createElement('h1')
            cardProfileName.textContent = `${user.name},`;
            cardContainer.appendChild(cardProfileName);

            const cardProfileoccupation = document.createElement('small');
            cardProfileoccupation.textContent = `Yrke:${user.yrke}`;
            cardContainer.append(cardProfileoccupation);

            const cardProfileRole = document.createElement('small');
            cardProfileRole.textContent = `Roll:${user.roll}`;
            cardContainer.append(cardProfileRole);

            const cardProfileQuote = document.createElement('p');
            cardProfileQuote.textContent = `Quote:${user.qoute}`;
            cardContainer.append(cardProfileQuote);

            cardContainer.classList.add('Section__cardContainer')

            });
        }
    }

    
    
    Render.renderUsers();

    



// // https://mocki.io/v1/d6cdabfa-c890-44c1-88cb-11ec56e3faf7


