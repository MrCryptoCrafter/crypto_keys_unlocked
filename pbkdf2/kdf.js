async function pbkdf2(password, providedSalt, iterations, keyLength) {
    const salt = providedSalt || generateSaltFromTimestamp();
    const passwordBuffer = new TextEncoder().encode(password);
    const saltBuffer = new TextEncoder().encode(salt);
    const key = await crypto.subtle.importKey(
        'raw',
        passwordBuffer,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
    );
    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt: saltBuffer,
            iterations: iterations,
            hash: 'SHA-256'
        },
        key,
        keyLength * 8
    );
    const derivedKey = bufferToHex(new Uint8Array(derivedBits));
    return { derivedKey, salt };
}

function bufferToHex(buffer) {
    return Array.from(buffer, byte => byte.toString(16).padStart(2, '0')).join('');
}
function generateSaltFromTimestamp() {
    const timestamp = new Date().getTime();
    const random = Math.random() * timestamp;
    return random.toString(36).substring(2, 15);
}

// const password = 'your-password';
// const salt = 'moneymade';
// const iterations = 1000;
// const keyLength = 32;

// pbkdf2(password, salt, iterations, keyLength).then(({ derivedKey, salt }) => {
//     console.log('Derived Key:', derivedKey);
//     console.log('Used Salt:', salt);
// });
