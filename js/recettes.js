function chargerRecettes() {
  fetch('https://monapi.exemple.com/api/recettes.php')
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('liste-recettes');
      ul.innerHTML = '';
      data.forEach(recette => {
        const li = document.createElement('li');
        li.textContent = recette.libelle + ' - ' + recette.description;
        ul.appendChild(li);
      });
    })
    .catch(error => {
      const ul = document.getElementById('liste-recettes');
      ul.innerHTML = '<li>Erreur lors du chargement des recettes.</li>';
    });
}

window.onload = chargerRecettes; 