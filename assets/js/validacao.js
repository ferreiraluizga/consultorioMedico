//função para validar todos os campos do formulário
function validar() {
    // valores dos campos
    var nome = document.getElementById('inputNome').value;
    var nascimento = document.getElementById('inputNascimento').value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var estadoCivil = document.querySelector('input[name="estadoCivil"]:checked');
    var cpf = document.getElementById('inputCPF').value;
    var rg = document.getElementById('inputRG').value;
    var cep = document.getElementById('inputCEP').value;
    var endereco = document.getElementById('inputEndereco').value;
    var bairro = document.getElementById('inputBairro').value;
    var numero = document.getElementById('inputNumero').value;
    var telefone = document.getElementById('inputTelefone').value;
    var email = document.getElementById('inputEmail').value;
    var especialista = document.getElementById('selectEspecialista').value;
    var medico = document.getElementById('selectMedico').value;
    var dataConsulta = document.getElementById('inputConsulta').value;
    var horarioConsulta = document.getElementById('inputHorario').value;

    // verificação para definir campos vazios ou não
    var isValid = true;

    //verificação dos campos um a um
    if (nome === '') {
        document.getElementById('nomeErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('nomeErro').innerHTML = '';
    }

    if (nascimento === '') {
        document.getElementById('nascimentoErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('nascimentoErro').innerHTML = '';
    }

    if (!genero) {
        document.getElementById('generoErro').innerHTML = 'Selecione uma opção';
        isValid = false;
    } else {
        document.getElementById('generoErro').innerHTML = '';
    }

    if (!estadoCivil) {
        document.getElementById('estadoCivilErro').innerHTML = 'Selecione uma opção';
        isValid = false;
    } else {
        document.getElementById('estadoCivilErro').innerHTML = '';
    }

    if (cpf === '') {
        document.getElementById('cpfErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else if (!validarCPF(cpf)) {
        document.getElementById('cpfErro').innerHTML = 'CPF inválido';
    } else {
        document.getElementById('cpfErro').innerHTML = '';
    }

    if (rg === '') {
        document.getElementById('rgErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else if (rg.length < 12){
        document.getElementById('rgErro').innerHTML = 'RG inválido';
        isValid = false;     
    } else {
        document.getElementById('rgErro').innerHTML = '';
    }

    if (cep === '') {
        document.getElementById('cepErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else if (cep.length < 8){
        document.getElementById('cepErro').innerHTML = 'CEP inválido';
        isValid = false;
    } else {
        document.getElementById('cepErro').innerHTML = '';
    }

    if (endereco === '') {
        document.getElementById('enderecoErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('enderecoErro').innerHTML = '';
    }

    if (bairro === '') {
        document.getElementById('bairroErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('bairroErro').innerHTML = '';
    }

    if (numero === '') {
        document.getElementById('numeroErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('numeroErro').innerHTML = '';
    }

    if (telefone === '') {
        document.getElementById('telefoneErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else if (telefone.length < 10){
        document.getElementById('telefoneErro').innerHTML = 'Telefone inválido';
        isValid = false; 
    } else {
        document.getElementById('telefoneErro').innerHTML = '';
    }

    if (email === '') {
        document.getElementById('emailErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else if (!validarEmail(email)) {
        document.getElementById('emailErro').innerHTML = 'E-mail inválido';
        isValid = false;
    } else {
        document.getElementById('emailErro').innerHTML = '';
    }


    if (especialista === '') {
        document.getElementById('especialistaErro').innerHTML = 'Selecione um especialista';
        isValid = false;
    } else {
        document.getElementById('especialistaErro').innerHTML = '';
    }

    if (medico === '') {
        document.getElementById('medicoErro').innerHTML = 'Selecione um médico';
        isValid = false;
    } else {
        document.getElementById('medicoErro').innerHTML = '';
    }

    if (dataConsulta === '') {
        document.getElementById('consultaErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('consultaErro').innerHTML = '';
    }

    if (horarioConsulta === '') {
        document.getElementById('horarioErro').innerHTML = 'Complete este campo';
        isValid = false;
    } else {
        document.getElementById('horarioErro').innerHTML = '';
    }

    // verificação final: se todos os campos estiverem preenchidos, o formulário é enviado
    if (isValid) {
        document.getElementById('formulario').submit();
    }
}

//validação do modelo do cpf 
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito > 9) {
        primeiroDigito = 0;
    }

    // cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    if (segundoDigito > 9) {
        segundoDigito = 0;
    }

    // verifica se os dígitos verificadores calculados correspondem aos dígitos verificadores fornecidos
    return parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito;
}

//validação do e-mail com modelo predefinido
function validarEmail(email) {
    var emailModel = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailModel.test(email);
}
