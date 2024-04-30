$(document).ready(function () {

    $('#inputTelefone').prop('disabled', true);
    function selecionarTelefone() {
        $('#selectTelefone').change(function () {
            var selecionado = $(this).val();
            if (selecionado == "celular") {
                $('#inputTelefone').attr('placeholder', 'Digite apenas os números: (99)99999-9999').prop('disabled', false);
                $('#inputTelefone').attr('maxlength', 11);
            } else {
                $('#inputTelefone').attr('placeholder', 'Digite apenas os números: (99)9999-9999').prop('disabled', false);
                $('#inputTelefone').attr('maxlength', 10);
            }
        });
    }
    selecionarTelefone();

    function limitarCpf() {
        $('#inputCPF').keydown(function (event) {
            var cpf = $(this).val().replace(/\D/g, '');

            // Limita o número de caracteres do CPF
            if (cpf.length >= 11 && event.keyCode !== 8 && event.keyCode !== 46) { // keyCode 8 é o Backspace e keyCode 46 é o Delete
                event.preventDefault();
            }

            // Adiciona os traços no CPF
            if (cpf.length <= 11) {
                cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
                cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
                cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            }

            $(this).val(cpf);
        });
    }
    limitarCpf();

    function limitarRg() {
        $('#inputRG').keydown(function (event) {
            var rg = $(this).val().replace(/\D/g, '');

            // Limita o número de caracteres do CPF
            if (rg.length >= 9 && event.keyCode !== 8 && event.keyCode !== 46) { // keyCode 8 é o Backspace e keyCode 46 é o Delete
                event.preventDefault();
            }

            // Adiciona os traços no CPF
            if (rg.length <= 9) {
                rg = rg.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona o ponto após os dois primeiros dígitos
                rg = rg.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o ponto após os três dígitos seguintes
                rg = rg.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen após os três últimos dígitos
            }


            $(this).val(rg);
        });
    }
    limitarRg();

    function verificarCep() {
        $('#inputCEP').on('input', function () {
            var cep = $(this).val();
            $.ajax({
                url: 'https://viacep.com.br/ws/' + cep + '/json/',
                dataType: 'json',
                success: function (data) {
                    // Atualiza os campos de endereço com os dados obtidos
                    $('#inputEndereco').val(data.logradouro);
                    $('#inputBairro').val(data.bairro);
                    $('#inputEndereco').prop('disabled', true);
                    $('#inputBairro').prop('disabled', true);
                    // Outros campos, como estado e cidade, podem ser atualizados da mesma forma
                }
            });
        });
    }
    verificarCep();

    function mostrarMedicos() {
        $('#selectEspecialista').change(function() {
            var especialidade = $(this).val();
            var selectMedico = $('#selectMedico');
            selectMedico.empty();
            selectMedico.append('<option value="" disabled selected>Selecione um Médico</option>');
            switch (especialidade) {
                case "Cardiologista":
                    adicionarMedico("Dr. João", selectMedico);
                    adicionarMedico("Dra. Maria", selectMedico);
                    break;
                case "Dermatologista":
                    adicionarMedico("Dr. José", selectMedico);
                    adicionarMedico("Dra. Ana", selectMedico);
                    break;
                case "Endocrinologista":
                    adicionarMedico("Dr. Carlos", selectMedico);
                    adicionarMedico("Dra. Laura", selectMedico);
                    break;
                case "Ginecologista":
                    adicionarMedico("Dra. Patricia", selectMedico);
                    adicionarMedico("Dr. Paulo", selectMedico);
                    break;
                case "Neurologista":
                    adicionarMedico("Dr. Ricardo", selectMedico);
                    adicionarMedico("Dra. Fernanda", selectMedico);
                    break;
                case "Ortopedista":
                    adicionarMedico("Dr. Marcelo", selectMedico);
                    adicionarMedico("Dra. Juliana", selectMedico);
                    break;
                case "Oftalmologista":
                    adicionarMedico("Dr. Lucas", selectMedico);
                    adicionarMedico("Dra. Camila", selectMedico);
                    break;
                case "Otorrinolaringologista":
                    adicionarMedico("Dr. André", selectMedico);
                    adicionarMedico("Dra. Sofia", selectMedico);
                    break;
                case "Pediatra":
                    adicionarMedico("Dr. Felipe", selectMedico);
                    adicionarMedico("Dra. Mariana", selectMedico);
                    break;
                case "Urologista":
                    adicionarMedico("Dr. Guilherme", selectMedico);
                    adicionarMedico("Dra. Beatriz", selectMedico);
                    break;
                case "Psiquiatra":
                    adicionarMedico("Dr. Roberto", selectMedico);
                    adicionarMedico("Dra. Carla", selectMedico);
                    break;
                case "Psicologo":
                    adicionarMedico("Dr. Pedro", selectMedico);
                    adicionarMedico("Dra. Ana", selectMedico);
                    break;
            }
        });
    }

    function adicionarMedico(nomeMedico, selectMedico) {
        var option = $('<option></option>').text(nomeMedico);
        selectMedico.append(option);
    }

    mostrarMedicos();

});
