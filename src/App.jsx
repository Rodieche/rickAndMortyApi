import { useEffect, useState } from "react"
import { CharacterList } from "./components/CharacterList";
import { Footer } from './components/Footer';

import Swal from 'sweetalert2'

export const App = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const sweetalert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Cargando...',
      text: 'Cargando informacion de la API...',
      didOpen: () => {
        Swal.showLoading()
      }
    })
    return;

  }

  useEffect(() => {
    async function fetchData(){
      const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await resp.json();
      setCharacters(data.results);
      setLoading(false);
      setPages(data.info.pages);
    } 
    fetchData();
    Swal.close();
  }, [page]);

  const prevPage = () =>{
    setPage(page - 1);
  }

  const nextPage = () =>{
    setPage(page + 1);
  }

  if(loading){
    return(
      sweetalert()
    )
  }

  return (
    <>  
      <h1 className="is-size-1 has-text-centered foldit">Rick and Morty API</h1>
      <nav className="pagination is-right padding-lateral" role="navigation" aria-label="pagination">
        { (page != 1)? <a className="pagination-previous button is-primary" onClick={prevPage}>Anterior</a> : <a className="pagination-previous is-disabled">Anteror</a> }
        { (page != pages)? <a className="pagination-next button is-link" onClick={nextPage}>Siguiente</a>: <a className="pagination-next is-disabled">Siguiente</a> }
      </nav>
      <div className="columns margin-top padding-lateral">
        <CharacterList characters={characters}/>
      </div>
      <nav className="pagination is-right padding-lateral" role="navigation" aria-label="pagination">
        { (page != 1)? <a className="pagination-previous button is-primary" onClick={prevPage}>Anteror</a> : <a className="pagination-previous is-disabled">Anteror</a> }
        { (page != pages)? <a className="pagination-next button is-link" onClick={nextPage}>Siguiente</a>: <a className="pagination-next is-disabled">Siguiente</a> }
      </nav>
      <Footer />
    </>
    
  )
}
