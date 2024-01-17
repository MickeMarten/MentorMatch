import { HandleUserInfo } from "./senduser.js";


class FetchUser {

    async users() {
        const url = "https://mocki.io/v1/d6cdabfa-c890-44c1-88cb-11ec56e3faf7"
        const response = await fetch(url)
        const users = await response.json();
        return users;
    }
}


class Render {

    static async renderUsers() {
        const fetchUser = new FetchUser();
        const users = await fetchUser.users();

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
    static createAccount() {

        const logInBtn = document.querySelector('.loginBtn');

        logInBtn.addEventListener('click', () => {
            const bookModal = document.createElement('div');
            document.body.append(bookModal);
            bookModal.classList.add('booking__modal')

            const fullNameInput = document.createElement('input')
            fullNameInput.type = 'text'
            fullNameInput.placeholder = 'För- och efternamn:'
            bookModal.appendChild(fullNameInput);


            const emailInput = document.createElement('input')
            emailInput.type = 'email'
            emailInput.placeholder = 'Email:'
            bookModal.append(emailInput);

            const occupation = document.createElement('input')
            occupation.type = 'text'
            occupation.placeholder = 'Ditt yrke:'
            bookModal.append(occupation);

            const adeptRadio = document.createElement('input');
            adeptRadio.type = 'radio';
            adeptRadio.name = 'role';
            bookModal.append(adeptRadio);
            const adeptLabel = document.createElement('label');
            adeptLabel.textContent = 'Adept';
            adeptRadio.value = 'Adept'
            bookModal.appendChild(adeptLabel);

            const mentorRadio = document.createElement('input');
            mentorRadio.type = 'radio';
            mentorRadio.name = 'role';
            bookModal.append(mentorRadio);
            const mentorLabel = document.createElement('label');
            mentorLabel.textContent = 'Mentor';
            mentorRadio.value = 'Mentor'
            bookModal.appendChild(mentorLabel);

            const quote = document.createElement('input')
            quote.type = 'text'
            quote.placeholder = 'Favoritcitat?'
            bookModal.append(quote);

            const passWordInput = document.createElement('input')
            passWordInput.placeholder = 'Lösenord:';
            passWordInput.type = 'password';
            bookModal.append(passWordInput);

            const sendBtn = document.createElement('button');
            sendBtn.innerText = 'Skapa konto';
            bookModal.append(sendBtn);
            sendBtn.classList.add('sendBtn');


            const sendUserInfo = new HandleUserInfo(sendBtn, emailInput, fullNameInput, passWordInput, mentorRadio, adeptRadio, quote, occupation);

        })
    }

}
Render.renderUsers();
Render.createAccount();