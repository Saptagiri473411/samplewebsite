// Minimal client-side form handling and helpful placeholder behavior
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message){
      status.textContent = 'Please fill in all fields.';
      status.className = '';
      return;
    }

    // If action is empty, open mailto as fallback to let user send with their mail client
    if(!form.action){
      const subject = encodeURIComponent('Website contact from ' + name);
      const body = encodeURIComponent(message + '\n\n— ' + name + '\n' + email);
      const mailto = `mailto:${document.getElementById('email').textContent || 'info@example.com'}?subject=${subject}&body=${body}`;
      window.location.href = mailto;
      status.textContent = 'Opening your email client...';
      return;
    }

    // Otherwise, submit via fetch to the form action endpoint (e.g., Formspree)
    fetch(form.action, {
      method: form.method || 'POST',
      body: new FormData(form)
    }).then(resp => {
      if(resp.ok){
        status.textContent = 'Message sent — thank you!';
        form.reset();
      } else {
        status.textContent = 'Failed to send message. Check form action or try again later.';
      }
    }).catch(err => {
      console.error(err);
      status.textContent = 'Network error. Please try again later.';
    });
  });
});
