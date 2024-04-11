document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contato');
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var assuntoInput = document.getElementById('assunto');
    var mensagemInput = document.getElementById('mensagem');
    var enviarBtn = document.getElementById('enviarBtn');
    var erroNome = document.getElementById('erroNome');
    var erroEmail = document.getElementById('erroEmail');
    var erroAssunto = document.getElementById('erroAssunto');
    var erroMensagem = document.getElementById('erroMensagem');

    function validarFormulario() {
        var nomeValor = nomeInput.value.trim();
        var emailValor = emailInput.value.trim();
        var assuntoValor = assuntoInput.value.trim();
        var mensagemValor = mensagemInput.value.trim();

        var nomeValido = nomeValor !== '';
        var emailValido = emailValor !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor);
        var assuntoValido = assuntoValor !== '';
        var mensagemValida = mensagemValor !== '';

        // Atualiza a exibição das mensagens de erro
        erroNome.textContent = nomeValido ? '' : 'Por favor, preencha o nome.';
        erroEmail.textContent = emailValido ? '' : (emailValor === '' ? 'Por favor, preencha o e-mail.' : 'O e-mail deve estar em um formato válido.');
        erroAssunto.textContent = assuntoValido ? '' : 'Por favor, preencha o assunto.';
        erroMensagem.textContent = mensagemValida ? '' : 'Por favor, preencha a mensagem.';

        return nomeValido && emailValido && assuntoValido && mensagemValida;
    }

    function enviarFormulario() {
        
        console.log('Nome:', nomeInput.value.trim());
        console.log('Email:', emailInput.value.trim());
        console.log('Assunto:', assuntoInput.value.trim());
        console.log('Mensagem:', mensagemInput.value.trim());

        alert('Formulário enviado com sucesso!');
    }

    form.addEventListener('input', function() {
        enviarBtn.disabled = !validarFormulario();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validarFormulario()) {
            enviarFormulario();
        }
    });
});

