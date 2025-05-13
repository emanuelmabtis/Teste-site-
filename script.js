// Função para adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});

// Função para o formulário de contato
document.querySelector('.contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
});
