import crypto from 'crypto';

const randomBytes = crypto.randomBytes(256).toString('base64');
console.log(randomBytes);

