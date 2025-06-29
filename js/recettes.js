function chargerRecettes() {
  fetch('../api/recettes.php')
    .then(response => response.json())
    .then(data => {
      const ul = document.getElementById('liste-recettes');
      ul.innerHTML = '';
      data.forEach(recette => {
        const li = document.createElement('li');
        li.textContent = recette.libelle + ' - ' + recette.description;
        ul.appendChild(li);
      });
    });
}

window.onload = chargerRecettes; 