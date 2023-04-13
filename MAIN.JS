const messages = [
  'You light up my world like nobody else, my love.',
  'Every day with you is better than the last.',
  'You make my heart sing with happiness.',
  'I am so grateful to have you in my life.',
];

let currentMessage = 0;

document.getElementById('message').innerHTML = messages[currentMessage];

document.getElementById('changeMessage').addEventListener('click', () => {
  currentMessage = (currentMessage + 1) % messages.length;
  document.getElementById('message').innerHTML = messages[currentMessage];
});
