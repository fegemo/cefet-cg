const surprises = document.querySelectorAll('.surprise');
let sound;

const surprise = e => {
  const el = e.currentTarget;
  sound.play();
  el.innerHTML = el.dataset.content;
  el.classList.add('transitioning');
  setTimeout(() => el.classList.add('revealed'), 0);
  el.removeEventListener('click', surprise);
};

surprises.forEach(el => {
    // preloads the sound, if havent been done before
    sound = sound || new Audio('../../audios/surprise.ogg');

    // makes the text incognito
    el.dataset.content = el.innerHTML;
    el.innerHTML = '?'.repeat(Math.min(10, el.innerHTML.length));

    // adds a click listener
    el.addEventListener('click', surprise);
});
