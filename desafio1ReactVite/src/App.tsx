import { useState } from 'react'
import './App.css'

function App() {

  /* Criando um array vazio para armazenar itens */
  const [list, setList] = useState<any[]>([]);

  /* Criando um array vazio para armazenar itens desfeitos */
  const [undid, setUndid] = useState<any[]>([]);

  /* event tem esse tipo pois o onClick dele esta dentro de uma div */
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);

    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    }

    console.log(newDot)
    /* Colocando o valor no array */
    /* Cria um novo array copia os itens que ja tinhamos e adiciona o novo */
    setList((coordenadas) => [...coordenadas, newDot])
  }

  /* Função Undo */
  /* event tem esse tipo pois o onClick dele esta dentro de um button */
  const handleUndo = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("undo");
    event.stopPropagation();
    if (list.length === 0) {
      alert("Não existem mais pontos para desfazer")
      return
    }

    /* Pegando ultimo elemento do array para salvar no array de itens desfeitos para ser usada na função de refazer */
    const lastItem = list[list.length - 1];
    setUndid((coordenadas) => [...coordenadas, lastItem])

    setList((coordenadas) => {
      const newCoordenadas = [...coordenadas].slice(0, -1);;
      return newCoordenadas;
    })

  }

  /* Função Redo */
  const handleRedo = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("redo");
    event.stopPropagation();

    if (undid.length === 0) {
      alert("Não existem mais pontos para refazer")
      return
    }

    /* Pegando ultimo elemento de undid */
    const recoveredDot = undid[undid.length - 1]
    setUndid((coordenadas) => {
      const newCoordenadas = [...coordenadas].slice(0, -1);;
      return newCoordenadas;
    });

    /* Pega a state atual e atualiza com o novo item */
    setList((coordenadas) => [...coordenadas, recoveredDot])
  }


  return (
    <div id='page' onClick={handleClick}>
      <button className='undo' onClick={handleUndo}>Desfazer</button>
      <button className='redo' onClick={handleRedo}>Refazer</button>
      {list.map((item, index) => <span key={index} className="dot" style={{ left: item.clientX, top: item.clientY }} />)}

    </div>
  )
}

export default App
