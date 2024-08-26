import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    maritalStatus: '',
    gender: ''
  });

  /* Função que atualiza State, os dados do campo vem dentro de event */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    console.log('changed');

    /* Pegando o input e seu valor */
    const { name, value } = event.target;

    /* Atualizando State de acordo com o Input */
    setData((prev) => {
      const newData = { ...prev, [name]: value }
      console.log(newData);
      return newData
    });
  }

  const calculateProgress = () => {
    let value = 0;
    let toAdd = 25;
    if (data.fullName) {
      const explodeString = data.fullName.split(' ')
      if (explodeString[1]) {
        value = value + toAdd;
      }
    }

    if (data.email) {
      /* Verifica se tem um formato de email valido */
      let validacao = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (validacao.test(data.email)) {
        value = value + toAdd;
      }
    }

    if (data.maritalStatus) {
      value = value + toAdd;
    }

    if (data.gender) {
      value = value + toAdd;
    }

    console.log(value)
    return value
  }

  const handleClick = () => {
    console.log('click');
    alert("Enviado Com Sucesso!")
    setData({
      fullName: '',
      email: '',
      maritalStatus: '',
      gender: ''
    })
  }

  return (
    <div className='App'>
      <h1>progresso do formulário</h1>

      <main>
        {/* Barra de Progresso */}
        <div className="bar-container">
          <div className="bar" style={{ width: `${calculateProgress()}%` }}></div>
        </div>

        <div className='form-group'>
          <label htmlFor=''>Nome e Sobrenome</label>
          <input name='fullName' value={data.fullName} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor=''>Email</label>
          <input name='email' value={data.email} onChange={handleChange} />
        </div>

        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select name='maritalStatus' value={data.maritalStatus} onChange={handleChange}>
            <option value=''>selecione</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name='gender' value='masculino' onChange={handleChange} checked={data.gender
                === 'masculino'
              } /> Masculino
            </span>
            <span>
              <input type='radio' name='gender' value='feminino' onChange={handleChange} checked={data.gender
                === 'feminino'} /> Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== 100}>Enviar Formulário</button>
      </main >
    </div >
  )
}

export default App
