const express = require('express');
const app = express();
const port = 3000;

const [reverse, reverseTwo, reverseThree, reverseFour] = require('./StringReversal/index');
const isPalindrome = require('./Palindrome/index');

app.get('/', (req, res) => res.send('Hack Reactor Prep'));
app.get('/reverse', (req, res) => res.send(reverse("HackReactor")));
app.get('/reverseTwo', (req, res) => res.send(reverseTwo('HackReactorReverseTwo')));
app.get('/reverseThree', (req, res) => res.send(reverseThree('HackReactorReverseThree')));
app.get('/reverseFour', (req, res) => res.send(reverseFour('HackReactorReverseFour')));
app.get('/isPalindrome', (req, res) => res.send(isPalindrome('dad')));

app.listen(port, () => console.log(`Hack Reactor Prep Server listening on port ${port}`));