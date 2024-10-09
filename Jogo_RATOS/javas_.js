let currentQuestion = 1;

function verificarResposta() {
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');
    const respostaSelecionada = form.querySelector(`input[name="q${currentQuestion}"]:checked`);
    
    if (!respostaSelecionada) {
        result.className = 'result incorrect';
        result.textContent = 'Por favor, selecione uma resposta!';
        return;
    }

    result.className = respostaSelecionada.value === 'correto' ? 'result correct' : 'result incorrect';
    result.textContent = respostaSelecionada.value === 'correto' ? 'Correto!' : 'Errado!';

    // Passa para a próxima pergunta após 1,5 segundos
    setTimeout(() => {
        document.getElementById(`question${currentQuestion}`).style.display = 'none';
        currentQuestion++;
        const proximaPergunta = document.getElementById(`question${currentQuestion}`);
        
        if (proximaPergunta) {
            proximaPergunta.style.display = 'block';
            result.textContent = '';  // Limpa o feedback
        } else {
            result.textContent = 'Quiz finalizado!';
            form.querySelector('button').style.display = 'none';  // Esconde o botão após a última pergunta
        }
    }, 1000);
}
