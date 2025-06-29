function chargerSessions() {
  fetch('https://monapi.exemple.com/api/sessions.php')
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('liste-sessions');
      ul.innerHTML = '';
      data.forEach(session => {
        const li = document.createElement('li');
        li.textContent = session.date + ' - ' + session.heure_debut + ' à ' + session.heure_fin + ' | ' + session.prix + '€';
        ul.appendChild(li);
      });
    })
    .catch(error => {
      const ul = document.getElementById('liste-sessions');
      ul.innerHTML = '<li>Erreur lors du chargement des sessions.</li>';
    });
}

window.onload = chargerSessions; 