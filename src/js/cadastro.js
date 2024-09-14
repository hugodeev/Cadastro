document.querySelector('.formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coletar os dados do formulário
    const nome = document.querySelector('#nome').value;
    const cargo = document.querySelector('#cargo').value;
    const denominacao = document.querySelector('#denominacao').value;
    const cidade = document.querySelector('#cidade').value;
    
    // Montar a URL com os parâmetros do formulário
    const url = `https://script.google.com/macros/s/AKfycbxioa9KNFnYaStqu2UZmiUSxamSi3S5PiPnxZqTenWvOCkWiqqKOdmqI_549v3QN99YIw/exec?nome=${encodeURIComponent(nome)}&cargo=${encodeURIComponent(cargo)}&denominacao=${encodeURIComponent(denominacao)}&cidade=${encodeURIComponent(cidade)}`;
    
    // Enviar os dados para a API via GET
    fetch(url)
      .then(response => response.text()) // Esperar por texto simples, não JSON
      .then(data => {
        alert(data); // Exibe a resposta do servidor
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar os dados.');
      });
  });