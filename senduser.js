
export class HandleUserInfo {
    constructor(sendBtn, emailInput, fullNameInput, passWordInput, mentorRadio, adeptRadio, qoute, occupation) {
        this.mentorRadio = mentorRadio;
        this.adeptRadio = adeptRadio;
        this.qoute = qoute;
        this.occupation = occupation;
        this.emailInput = emailInput;
        this.fullNameInput = fullNameInput;
        this.passWordInput = passWordInput;
        this.sendBtn = sendBtn;
        sendBtn.addEventListener('click', () => this.createUser())
    }

    async createUser() {


        const userEmailValue = this.emailInput.value;
        const fullNameValue = this.fullNameInput.value;
        const passwordValue = this.passWordInput.value;
        const userQouteValue = this.qoute.value;
        const userOccupationValue = this.occupation.value;




        if (this.mentorRadio.checked) {
            this.selectedRole = 'Mentor'
        } else if (this.adeptRadio.checked) {
            this.selectedRole = 'Adept'
        } else {
            console.log('Välj en roll');
        }

        console.log('Username:', fullNameValue);
        console.log('Email:', userEmailValue);
        console.log('Favoritcitat:', userQouteValue);
        console.log('Yrke', userOccupationValue);
        console.log('Roll', this.selectedRole);
        console.log('Password:', passwordValue);
        console.log('id', this.userID);




        const userData = {
            id: this.userID,
            name: fullNameValue,
            email: userEmailValue,
            quote: userQouteValue,
            occupation: userOccupationValue,
            role: this.selectedRole,
            password: passwordValue

        };

        const response = await fetch('http://localhost:3000/userData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(userData),

        })


    }
}










// // https://mocki.io/v1/d6cdabfa-c890-44c1-88cb-11ec56e3faf7


