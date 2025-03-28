import React, { useState, useRef, useEffect } from "react";

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

export function PasswordGame() {
  const [senha, setSenha] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [vitoria, setVitoria] = useState(false);
  const [tentativas, setTentativas] = useState([]);
  const [jogoIniciado, setJogoIniciado] = useState(false);
  const inputRef = useRef(null);

  const iniciarJogo = () => {
    setSenha(gerarSenha());
    setEntrada("");
    setMensagem("");
    setVitoria(false);
    setTentativas([]);
    setJogoIniciado(true);
  };

  useEffect(() => {
    if (jogoIniciado && inputRef.current) {
      inputRef.current.focus();
    }
  }, [jogoIniciado]);

  const handleChange = (e) => {
    setEntrada(e.target.value);
  };

  const handleSubmit = () => {
    if (!/^\d{4}$/.test(entrada)) {
      setMensagem("Entrada inválida. Use exatamente 4 dígitos numéricos.");
      return;
    }

    const tentativa = entrada.split("").map(Number);
    const setTentativa = new Set(tentativa);
    if (setTentativa.size !== 4) {
      setMensagem("Os dígitos devem ser únicos.");
      return;
    }

    const { acertos, deslocados } = verificarTentativa(senha, entrada);

    const resultado = `${entrada} → ${acertos} na posição correta, ${deslocados} correto(s) fora de posição.`;
    setTentativas((prev) => [...prev, resultado]);

    if (acertos === 4) {
      setVitoria(true);
      setMensagem("Parabéns! Você acertou a senha!");
    } else {
      setMensagem(resultado);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--gray-900)] p-4">
      <div className="bg-[var(--gray-900)] shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Jogo da Senha</h1>
        {!jogoIniciado ? (
          <div className="flex flex-col items-center">
            <button
              onClick={iniciarJogo}
              className="bg-[var(--green-500)] text-white h-8 w-32 px-4 rounded hover:bg-green-700 transition"
            >
              Iniciar Jogo
            </button>
          </div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="text"
              value={entrada}
              onChange={handleChange}
              className="w-full p-2  rounded mb-4 focus:outline-none focus:ring-2 focus:ring-white bg-[var(--gray-600)] text-white"
              placeholder="Digite 4 dígitos únicos"
              maxLength={4}
              disabled={vitoria}
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-[var(--green-500)] text-white py-2 rounded"
              disabled={vitoria}
            >
              Verificar
            </button>
            {mensagem && (
              <div className="mt-4 text-center text-lg font-medium text-white">
                {mensagem}
              </div>
            )}
            {tentativas.length > 0 && (
              <div className="mt-4">
                <h2 className="text-md font-semibold mb-2">Histórico de Tentativas:</h2>
                <textarea
                  readOnly
                  className="w-full h-40 p-2  rounded resize-none bg-[var(--gray-600)] text-sm"
                  value={tentativas.join("\n")}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}