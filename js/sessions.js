function chargerSessions() {
  fetch('../api/sessions.php')
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('liste-sessions');
      ul.innerHTML = '';
      data.forEach(session => {
        const li = document.createElement('li');
        li.textContent = session.date + ' - ' + session.heure_debut + ' à ' + session.heure_fin + ' | ' + session.prix + '€';
        ul.appendChild(li);
      });
    });
}

window.onload = chargerSessions; 