module.exports = function() {
  var pageHeaderEl = document.getElementById('page-header'),
      bodyClasses = document.body.classList;

  if (pageHeaderEl) {
    pageHeaderEl.addEventListener('mouseover', function() {
      bodyClasses.add('menu-open');
    });

    pageHeaderEl.addEventListener('mouseleave', function() {
      bodyClasses.remove('menu-open');
    });
  }
};
