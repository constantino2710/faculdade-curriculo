const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Gera senha aleatória com 4 dígitos únicos
function gerarSenha() {
  const digitos = [];
  while (digitos.length < 4) {
    const n = Math.floor(Math.random() * 10);
    if (!digitos.includes(n)) {
      digitos.push(n);
    }
  }
  return digitos;
}

// Compara tentativa com senha
function verificarTentativa(senha, tentativa) {
  const tentativaArr = tentativa.split("").map(Number);
  let acertos = 0;
  let deslocados = 0;

  tentativaArr.forEach((num, idx) => {
    if (num === senha[idx]) {
      acertos++;
    } else if (senha.includes(num)) {
      deslocados++;
    }
  });

  return { acertos, deslocados };
}

// Loop do jogo
function iniciarJogo() {
  const senha = gerarSenha();
  // console.log("Senha:", senha); // use para debug

  const perguntar = () => {
    rl.question("Digite sua tentativa (4 dígitos únicos): ", (entrada) => {
      if (!/^\d{4}$/.test(entrada)) {
        console.log("Entrada inválida. Use exatamente 4 dígitos numéricos.");
        return perguntar();
      }

      const tentativa = entrada.split("").map(Number);
      const set = new Set(tentativa);
      if (set.size !== 4) {
        console.log("Os dígitos devem ser únicos.");
        return perguntar();
      }

      const { acertos, deslocados } = verificarTentativa(senha, entrada);

      if (acertos === 4) {
        console.log("Parabéns! Você acertou a senha!");
        rl.close();
      } else {
        console.log(`${acertos} número(s) na posição correta, ${deslocados} correto(s) mas na posição errada.`);
        perguntar();
      }
    });
  };

  console.log("Bem-vindo ao jogo da senha!");
  perguntar();
}

iniciarJogo();
