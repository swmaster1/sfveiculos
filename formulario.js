document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let modelo = document.getElementById('modelo').value;
    let contrato = document.getElementById('checkbox').value;

    // Verificação de campos vazios
    if (!username || !email || !telefone || !modelo || !contrato) {
        alert('Por favor, preencha todos os campos e aceite os termos.');
        return;
    }


    // Verificação de formato do email
    if (!validarEmail(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }


    // Se todas as verificações passarem
    alert('Cadastro de cliente realizado com sucesso!');
    this.submit(); // Envia o formulário
    this.reset();
});

function validarEmail(email) {
    // Expressão regular para verificar o formato do email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
