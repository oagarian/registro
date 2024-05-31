document.addEventListener('DOMContentLoaded', (event) => {
    const keypad = document.getElementById('keypad');
    const passwordInput = document.getElementById('password');
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateKeypad() {
        keypad.innerHTML = '';
        shuffle(numbers);
        numbers.forEach(number => {
            const button = document.createElement('button');
            button.textContent = number;
            button.addEventListener('click', () => {
                passwordInput.value += number;
                generateKeypad();
            });
            keypad.appendChild(button);
        });
    }

    generateKeypad();
});

function generateRandomUsername(length = 8) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let username = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }
    return username;
}

function warn(user) {
    user = generateRandomUsername()
    alert("Essa senha já é utilizada pelo usuário #{user}")
}

function updateCPF() {
    const cpfInput = document.getElementById('cpf');
    const cpfDisplay = document.getElementById('cpfDisplay');
    let cpfValue = cpfInput.value.padStart(11, '0');
    cpfDisplay.textContent = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function resetForm() {
    document.getElementById('registerForm').reset();
    document.getElementById('cpfDisplay').textContent = '000.000.000-00';
    document.getElementById('password').value = '';
    document.getElementById('keypad').innerHTML = '';
    document.addEventListener('DOMContentLoaded', (event) => {
        const keypad = document.getElementById('keypad');
        const passwordInput = document.getElementById('password');
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function generateKeypad() {
            keypad.innerHTML = '';
            shuffle(numbers);
            numbers.forEach(number => {
                const button = document.createElement('button');
                button.textContent = number;
                button.addEventListener('click', () => {
                    passwordInput.value += number;
                    generateKeypad();
                });
                keypad.appendChild(button);
            });
        }

        generateKeypad();
    });
}
