/**
 * Created by Flavio on 22/06/2015.
 */

var pv = document.getElementsByClassName('phong-vectors');

[].forEach.call(pv, function(el) {
  el.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('complete');
  });
});