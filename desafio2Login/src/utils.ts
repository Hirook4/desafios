export type LoginParams = {
  email: string;
  password: string;
};

/* Função espera UM parâmetro Objeto com DUAS propriedades */
export function login({ email, password }: LoginParams) {
  /* Apenas para simular uma conexão */
  const delay = (0.1 + Math.random() * 2) * 1000;

  /*
    Promise:
    Uma promise em JavaScript é como uma promessa que você faz a alguém: ela pode ser cumprida (resolved), rejeitada (rejected) ou ainda estar em andamento (pending).
    
    Quer dizer que vai fazer algo que pode demorar (como buscar dados em um servidor). Podendo terminar de duas formas:
     - Cumprida (resolved): Operação concluída com sucesso e você recebe o resultado. Usado com Then
     - Rejeitada (rejected): Deu errado e você recebe um erro ou mensagem de falha. Usado com Catch
     Temos também o finally() que é executado em qualquer situação
     
     Enquanto a promise está sendo processada, ela está no estado "pendente" (pending). Quando a operação termina, a promise "resolve" ou "rejeita", e você pode agir com base no resultado usando os métodos .then() (para quando é cumprida) e .catch() (para quando é rejeitada).
    */

  return new Promise<void>((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve();
      } else {
        reject({ message: "email ou senha inválidos." });
      }
    }, delay);
  });
}
