<?php
//variáveis que representam dados inseridos no formulário
$nome = "";
$nascimento = "";
$genero = "";
$estadoCivil = "";
$cpf = "";
$rg = "";
$cep = "";
$endereco = "";
$numero = "";
$bairro = "";
$complemento = "";
$telefone = "";
$email = "";
$especialista = "";
$dataConsulta = "";
$observacao = "";

// verificação do método do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //atribuição dos dados inseridos às variáveis correspondentes

    if (isset($_POST['inputNome'])) {
        $nome = $_POST['inputNome'];
    }

    if (isset($_POST['inputNascimento'])) {
        $nascimento = $_POST['inputNascimento'];
    }

    if (isset($_POST['genero'])) {
        $genero = $_POST['genero'];
    }

    if (isset($_POST['estadoCivil'])) {
        $estadoCivil = $_POST['estadoCivil'];
    }

    if (isset($_POST['inputCPF'])) {
        $cpf = $_POST['inputCPF'];
    }

    if (isset($_POST['inputRG'])) {
        $rg = $_POST['inputRG'];
    }

    if (isset($_POST['inputCEP'])) {
        $cep = $_POST['inputCEP'];
    }

    if (isset($_POST['inputEndereco'])) {
        $endereco = $_POST['inputEndereco'];
    }

    if (isset($_POST['inputBairro'])) {
        $bairro = $_POST['inputBairro'];
    }

    if (isset($_POST['inputNumero'])) {
        $numero = $_POST['inputNumero'];
    }

    if (isset($_POST['inputComplemento'])) {
        $complemento = $_POST['inputComplemento'];
    }

    if (isset($_POST['inputTelefone'])) {
        $telefone = $_POST['inputTelefone'];
    }

    if (isset($_POST['inputEmail'])) {
        $email = $_POST['inputEmail'];
    }

    if (isset($_POST['selectEspecialista'])) {
        $especialista = $_POST['selectEspecialista'];
    }

    if (isset($_POST['selectMedico'])) {
        $medico = $_POST['selectMedico'];
    }

    if (isset($_POST['inputConsulta'])) {
        $dataConsulta = $_POST['inputConsulta'];
    }

    if (isset($_POST['inputHorario'])) {
        $horarioConsulta = $_POST['inputHorario'];
    }

    if (isset($_POST['observacaoTextarea'])) {
        $observacao = $_POST['observacaoTextarea'];
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap 5.3-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <!--jquery-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!--css-->
    <link rel="stylesheet" href="assets/css/style.css">
    <!--js-->
    <script src="assets/js/validacao.js"></script>
    <script src="assets/js/formatarCampos.js"></script>
    <!--favicon-->
    <link rel="shortcut icon" href="assets/img/pageIcon.png" type="image/x-icon">
    <title>Consultório Médico</title>
</head>

<body>

    <!--navbar-->
    <header>
        <div class="row fixed-top bg-primary">
            <div class="col">
                <div class="container m-auto">
                    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="index.html">Consultório Médico</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" aria-current="page" href="index.html">Agendar Consulta</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="consultas.html">Consultas Agendadas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <!--seção principal do site-->
    <main>

        <div class="container m-auto">

            <br><br><br>

            <!--mensagem de confirmação da consulta-->
            <div class="row mb-3">
                <div class="col">
                    <h3 class="fs-5 fw-medium mb-3">Consulta agendada com sucesso! 📅</h3>
                    <p><?php echo $nome ?>, sua consulta foi marcada com o(a) <?php echo $especialista . " " . $medico ?>, às <?php echo $horarioConsulta ?> do dia <?php echo date("d/m/Y", strtotime($dataConsulta)); ?>. Em breve entraremos em contato para mais informações, obrigado!</p>
                </div>
            </div>
            <!--informações inseridas pelo usuário através do formulário-->
            <div class="row mb-3">
                <div class="col">
                    <h3 class="fs-5 fw-medium mb-3">Dados do Paciente 👤</h3>
                    <p>
                        <strong>Nome:</strong> <?php echo $nome ?> <br>
                        <strong>Data de Nascimento:</strong> <?php echo date("d/m/Y", strtotime($nascimento)) ?> <br>
                        <strong>Gênero:</strong> <?php echo $genero ?> <br>
                        <strong>Estado Civil:</strong> <?php echo $estadoCivil ?> <br>
                        <strong>CPF:</strong> <?php echo $cpf ?> <br>
                        <strong>RG:</strong> <?php echo $rg ?> <br>
                        <strong>Telefone:</strong> <?php echo $telefone ?> <br>
                        <strong>E-Mail:</strong> <?php echo $email ?> <br>
                    </p>
                </div>
            </div>

        </div>

    </main>

</body>

</html>