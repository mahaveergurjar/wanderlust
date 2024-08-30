// Automatically hide flash messages after 3 seconds
setTimeout(() => {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.classList.remove('show'); // Bootstrap will automatically add "show" class, we remove it to start the fading out
        alert.classList.add('fade');    // Add the "fade" class to start the fading animation
        });
}, 3000);
       
          
