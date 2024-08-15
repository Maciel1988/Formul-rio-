// Função para validar o campo
function validateField(input) {
    const errorMessage = input.nextElementSibling;

    if (input.value.trim() === '') {
        input.classList.remove('success');
        input.classList.add('error');
        errorMessage.style.display = 'block'; // Mostra a mensagem de erro
    } else {
        input.classList.remove('error');
        input.classList.add('success');
        errorMessage.style.display = 'none'; // Esconde a mensagem de erro
    }
}

// Seleciona o formulário e todos os campos de entrada
const form = document.getElementById('contactForm');
const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');

// Adiciona o evento de validação em cada campo ao perder o foco (blur)
inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
});

// Valida todos os campos ao tentar submeter o formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário automaticamente
    let isValid = true;

    inputs.forEach(input => {
        validateField(input);
        if (input.classList.contains('error')) {
            isValid = false;
        }
    });

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});
