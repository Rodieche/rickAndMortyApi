import { useEffect, useState } from "react"
import { CharacterList } from "./components/CharacterList";

export const App = () => {

  

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);


  useEffect(() => {
    async function fetchData(){
      const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await resp.json();
      setCharacters(data.results);
      setLoading(false);
    } 
    fetchData();
  }, [page]);

  const prevPage = () =>{
    setPage(page - 1);
  }

  const nextPage = () =>{
    setPage(page + 1);
  }

  return (
    <>
      <h1 className="is-size-1 has-text-centered">Rick and Morty API</h1>
      <h3 className="has-text-centered">Develop by 0rangeH4t</h3>
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <a className="pagination-previous" onClick={prevPage}></a>
        <a className="pagination-next" onClick={nextPage}>Next page</a>
      </nav>
      <div className="columns margin-top">
        <CharacterList characters={characters}/>
      </div>
    </>

  )
}
