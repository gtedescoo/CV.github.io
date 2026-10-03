// Flip the badge on click or Enter/Space
const badge = document.getElementById('badge');
const toggleFlip = () => badge.classList.toggle('flipped');
badge.addEventListener('click', (e) => { if (!e.target.closest('a') && !e.target.closest('button')) toggleFlip(); });
badge.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(); }
});

// Decorative barcode
const barWidths = [3,1,2,3,1,2,1,3,2,1,3,1,2,2,3,1,2,3,1,1,2,3,1,2,3,1,2,1,3,2,1,2,3,1,2];
const barcode = document.getElementById('barcode');
barWidths.forEach((w, i) => {
  const bar = document.createElement('div');
  bar.style.width = (w * 2) + 'px';
  bar.style.height = (i % 3 === 0 ? 36 : i % 5 === 0 ? 24 : 30) + 'px';
  bar.style.opacity = i % 2 === 0 ? 1 : .25;
  barcode.appendChild(bar);
});


const projects = {
  igb: {
    title: "Eventos y Comunicación · IGB, Copenhague",
    text: "Planificación y coordinación de eventos mensuales en un espacio gastronómico internacional. Organización del espacio y disposición de sala en función del tipo de evento y del flujo de clientes, gestión de proveedores, calendario de actividades y comunicación con clientes."
  },
  milano: {
    title: "Web y Análisis de Datos · Univ. Statale di Milano",
    text: "Proyecto académico en Comunicación Corporativa con varios ejes: desarrollo de una web propia en HTML/CSS; análisis de datos con Stata y Excel sobre sueño y bienestar en Francia y Suecia, con test estadísticos y regresión lineal; redacción de una reseña de cine sobre poder digital en formato de review online; e investigación de tendencias de consumo mediante entrevistas en equipo para el curso de Consumer Culture."
  }
};
  
};

const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = btn.dataset.project;
    modalTitle.textContent = projects[key].title;
    modalText.textContent = projects[key].text;
    overlay.classList.add('open');
  });
});

document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') overlay.classList.remove('open');
});




