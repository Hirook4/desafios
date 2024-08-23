/* Apenas para simular request para API/Servidor para testar login */
import { login } from './utils.ts';
import './index.css';
import { useState } from 'react';

export type WarningObject = {
  message: string;
};

export default function LoginForm() {

  /* Criando State dos campos */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState<WarningObject | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);
  const [message, setMessage] = useState('');

  /* Recupera o que foi digitado e altera a State */
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const value = event.target.value /* Pode ser const {value} = event.target */
    console.log(value);
    setEmail(value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const value = event.target.value /* Pode ser const {value} = event.target */
    console.log(value);
    setPassword(value);
  }

  /* Função do botão */
  const handleSubmit = () => {
    console.log("Botão");
    setWarning(null);
    setIsRequesting(true);
    setMessage('');
    /* Passando os valores do state para a função */
    let values = { email: email, password: password }
    /* O primeiro parametro para o then ou catch assume o retorno da Promise */
    login(values)
      .then(() => {
        console.log("then - deu certo")
        setWarning({ message: "LOGIN REALIZADO COM SUCESSO" });
        setMessage('successMessage');
      })
      /* Define a frase de erro pegando o retorno catch da Promise */
      .catch((e) => {
        console.log(e);
        setMessage('errorMessage');
        setWarning(e)
        setEmail('');
        setPassword('');
      }).finally(() => { setIsRequesting(false) }) /* Finally é executado independente de deu certo ou errado */
    /* Podemos usar Short Sintax aqui
    .finally(()=> setIsRequesting(false));
    */
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Aviso de Login */}
        {warning && <div className={message}>{warning.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleEmail} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword} />
        </div>

        <div className='button'>
          <button onClick={handleSubmit} disabled={email === '' || password.length < 6 || isRequesting}>Login</button>
        </div>

      </div>
    </div>
  );
}
