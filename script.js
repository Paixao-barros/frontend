document.getElementById('formContrato').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch('https://backend-contratos.onrender.com/upload', {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('resultado').textContent =
        `Fornecedor: ${data.dados.fornecedor}, Início: ${data.dados.dataInicio}, Validade: ${data.dados.dataValidade}`;

      // ✅ LIMPAR FORMULÁRIO APÓS ENVIO
      form.reset();
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao enviar contrato.');
    });
});
