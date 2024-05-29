const textInput = document.querySelector('#text');
const checkInput = document.querySelector('#check');
const submitBtn = document.querySelector('#submit');
const spoilers = document.querySelectorAll('.spoiler');

const revealSpoiler = () => {
  spoilers.forEach((spoiler) => {
    spoiler.classList.remove('spoiler');
  });
};

spoilers.forEach((spoiler) => {
  spoiler.addEventListener('click', (e) => {
    revealSpoiler();
  });
});

textInput.addEventListener('keydown', (e) => {
  console.log('input', e.currentTarget.value);
});

checkInput.addEventListener('change', (e) => {
  console.log(e.currentTarget.checked);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(textInput.value);
});
