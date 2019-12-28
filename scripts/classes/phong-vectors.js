/**
 * Created by Flavio on 22/06/2015.
 */

const pv = document.querySelectorAll('.phong-vectors');

Array.from(pv).forEach(el =>
  el.addEventListener('click', e =>
    e.currentTarget.classList.toggle('complete')
  )
);
