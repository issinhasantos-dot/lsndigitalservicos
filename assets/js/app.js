document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('diagnosticForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = new FormData(form).get('tema');
    if (!selected) return;

    const text = `Olá, vim pelo Diagnóstico LSN em 60 segundos. Preciso de ajuda com: ${selected}.`;
    const url = `https://wa.me/5521999959947?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
});
