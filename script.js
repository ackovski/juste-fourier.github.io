// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // ----- Génération dynamique des rapports -----
  fetch('reports.json')
    .then(response => response.json())
    .then(reports => {
      const reportList = document.getElementById('report-list');
      if (!reportList) return;

      reports.forEach(report => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `reports/${report.name}`;
        link.textContent = report.title;  // titre lisible
        link.target = "_blank";
        li.appendChild(link);
        reportList.appendChild(li);
      });
    })
    .catch(error => console.error('Erreur lors du chargement des rapports:', error));
});
