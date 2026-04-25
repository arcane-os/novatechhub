/* ============================================================
   NovaTech Hub — JavaScript principal
   Auteur : S. Modeste YABLA
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MENU BURGER MOBILE ── */
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('nav-mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      toggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Fermer le menu en cliquant sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  /* ── FORMULAIRE DE CONTACT (Formspree) ── */
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Envoi en cours...';
      btn.disabled = true;

      try {
        const response = await fetch('https://formspree.io/f/xlgaveka', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });

        if (response.ok) {
          form.reset();
          formMsg.textContent = '✓ Message envoyé ! On te répond bientôt.';
          formMsg.style.color = 'var(--gold)';
          btn.textContent = 'Envoyer →';
          btn.disabled = false;
        } else {
          throw new Error('Erreur serveur');
        }
      } catch {
        formMsg.textContent = '✗ Erreur lors de l\'envoi. Réessaie ou écris à arcaneos2007@gmail.com';
        formMsg.style.color = '#e07070';
        btn.textContent = 'Envoyer →';
        btn.disabled = false;
      }
    });
  }

});
