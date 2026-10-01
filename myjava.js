// Flip the badge on click or Enter/Space
const badge = document.getElementById('badge');
const toggleFlip = () => badge.classList.toggle('flipped');
badge.addEventListener('click', (e) => { if (!e.target.closest('a')) toggleFlip(); });
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
