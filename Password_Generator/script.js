document.getElementById('generate').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    document.getElementById('password').value = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
});

document.getElementById('copy').addEventListener('click', () => {
    const password = document.getElementById('password');
    if (password.value) {
        password.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()-_=+[{]}|;:,<.>/';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}
