    // Variáveis para armazenar a entrada do usuário e a operação selecionada
    let currentInput = ""; 
    let currentOperation = "";

    // Função para adicionar números ao display
    function appendNumber(number) {
        currentInput += number; // Adiciona o número ao valor atual da entrada
        document.getElementById("display").value = currentInput; // Atualiza o display
    }

    // Função para limpar o display
    function clearDisplay() {
        currentInput = ""; // Limpa a entrada
        document.getElementById("display").value = ""; // Limpa o display
    }

    // Função para adicionar operadores (como +, -, *, /) ao display
    function operation(op) {
        if (currentInput === "") return; // Não faz nada se não houver número na entrada
        currentOperation = op; // Armazena a operação escolhida
        currentInput += op; // Adiciona o operador à entrada
        document.getElementById("display").value = currentInput; // Atualiza o display
    }

    // Função para calcular o resultado da expressão matemática
    function calculateResult() {
        try {
            // Usamos eval() para calcular a expressão matemática digitada (pode ser perigoso em alguns casos)
            currentInput = eval(currentInput); 
            document.getElementById("display").value = currentInput; // Exibe o resultado
        } catch (error) {
            document.getElementById("display").value = "Erro"; // Caso ocorra um erro na expressão
        }
    }

    // Função para calcular a raiz quadrada
    function sqrt() {
        if (currentInput === "") return; // Se não houver entrada, não faz nada
        currentInput = Math.sqrt(eval(currentInput)); // Calcula a raiz quadrada do número
        document.getElementById("display").value = currentInput; // Exibe o resultado
    }

    // Função para calcular o seno de um ângulo (em radianos)
    function sine() {
        if (currentInput === "") return; // Se não houver entrada, não faz nada
        currentInput = Math.sin(degreesToRadians(eval(currentInput))); // Calcula o seno do número
        document.getElementById("display").value = currentInput; // Exibe o resultado
    }

    // Função para calcular o cosseno de um ângulo (em radianos)
    function cosine() {
        if (currentInput === "") return; // Se não houver entrada, não faz nada
        currentInput = Math.cos(degreesToRadians(eval(currentInput))); // Calcula o cosseno do número
        document.getElementById("display").value = currentInput; // Exibe o resultado
    }

    // Função para calcular a tangente de um ângulo (em radianos)
    function tangent() {
        if (currentInput === "") return; // Se não houver entrada, não faz nada
        currentInput = Math.tan(degreesToRadians(eval(currentInput))); // Calcula a tangente do número
        document.getElementById("display").value = currentInput; // Exibe o resultado
    }

    // Função para calcular o logaritmo (base 10)
    function logarithm() {
        if (currentInput === "") return; // Se não houver entrada, não faz nada
        currentInput = Math.log10(eval(currentInput)); // Calcula o logaritmo de base 10
        document.getElementById("display").value = currentInput; // Exibe o resultado
    }

    // Função auxiliar para converter graus em radianos (necessário para funções trigonométricas)
    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180); // Converte os graus para radianos
    }