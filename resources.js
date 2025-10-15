document.querySelectorAll('.asset').forEach(card => {
  const img = card.querySelector('img');
  const link = card.querySelector('a[download]');
  if (!img || !link) return;
  fetch(link.href, { referrerPolicy: 'no-referrer' })
    .then(r => r.ok ? r.blob() : Promise.reject())
    .then(b => { if (b.type.startsWith('image/')) img.src = URL.createObjectURL(b); })
    .catch(() => {});
});

