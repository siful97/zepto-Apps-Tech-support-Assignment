document.getElementById('user-menu-button').addEventListener('click', function() {
    var menu = document.getElementById('user-menu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });