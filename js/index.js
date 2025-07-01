document.addEventListener("DOMContentLoaded", () => {
  const servicos = ["Criação", "Manutenção", "Consultoria"];
  const select = document.getElementById("service");

  servicos.forEach((servico) => {
    const option = document.createElement("option");
    option.value = servico.toLowerCase();
    option.textContent = servico;
    select.appendChild(option);
  });
});
