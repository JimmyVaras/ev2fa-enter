document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('notification_2factor_button_ok').click();
  }
});
