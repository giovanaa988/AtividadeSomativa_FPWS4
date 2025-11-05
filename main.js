// Simples exemplo de interatividade no menu
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("ativo"));
      link.classList.add("ativo");
    });
  });
});
