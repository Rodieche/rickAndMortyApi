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
      <h1 className="is-size-1 has-text-centered foldit white-bg">Rick and Morty API</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fill-opacity="1" d="M0,224L30,192C60,160,120,96,180,101.3C240,107,300,181,360,197.3C420,213,480,171,540,144C600,117,660,107,720,90.7C780,75,840,53,900,58.7C960,64,1020,96,1080,138.7C1140,181,1200,235,1260,250.7C1320,267,1380,245,1410,234.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      <nav className="pagination is-right padding-lateral margin-top-less" role="navigation" aria-label="pagination">
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
