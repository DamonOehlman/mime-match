var match = require('./');

// exact match
console.log(match('image/jpeg', 'image/jpeg'));
// --> true

// wildcard match
console.log(match('image/jpeg', 'image/*'));
// --> true

// find which of our wildcard patterns matches a specific mimetype
console.log(['application/*', 'image/*'].filter(match('image/jpeg')));
// --> ['image/*']
