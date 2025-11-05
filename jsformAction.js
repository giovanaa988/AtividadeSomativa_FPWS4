document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const dadosDiv = document.getElementById("dados");

  if ([...params].length === 0) {
    dadosDiv.innerHTML = "<p>Nenhum dado foi recebido.</p>";
    return;
  }

  let html = "<ul>";
  params.forEach((valor, chave) => {
    html += `<li><strong>${chave}:</strong> ${valor}</li>`;
  });
  html += "</ul>";

  dadosDiv.innerHTML = html;
});
