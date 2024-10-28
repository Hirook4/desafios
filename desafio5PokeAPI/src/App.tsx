import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface PokemonData {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  base_experience: number;
  sprites: {
    front_default: string;
  };
}

function App() {
  const [list, setList] = useState<PokemonData[]>([]);

  const fetchListData = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {

        /* Ordena lista por nome */
        const sortedArray = [...response.data.results];

        sortedArray.sort((a, b) => {
          console.log({ a });
          console.log({ b });
          return a.name.localeCompare(b.name);
        });
        console.log(sortedArray);
        setList(sortedArray)
      });
  }

  useEffect(() => {
    fetchListData();
  }, []);


  return (
    <>
      <h1>consumir api pokémon</h1>
      <hr></hr>
      {list.map((item) => (
        <Pokemon key={item.name} data={item} />
      ))}
    </>
  );
}

interface PokemonProps {
  data: PokemonData;
}

const Pokemon = ({ data }: PokemonProps) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data));
  }, [data.url]);

  if (details === null) {
    return <>-</>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={details.sprites.front_default} alt={`${details.name} sprite`} style={{ width: 50, marginRight: 20 }} />
      <span>
        <b>{details.name}</b> - {details.base_experience} -
      </span>


    </div>
  );
}

export default App;
