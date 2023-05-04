import { useFetchApi } from "./hooks/rickAndMortyAPI";

import { CharacterList } from "./components/CharacterList";
import { Footer } from './components/Footer';

export const App = () => {

  const { characters, loading, page, pages, prevPage, nextPage } = useFetchApi(1);

  return (
    <>
      <h1 className="is-size-1 has-text-centered">Rick and Morty API</h1>
      <nav className="pagination is-right" role="navigation" aria-label="pagination">
        { (page != 1)? <a className="pagination-previous" onClick={prevPage}>Anteror</a> : <a className="pagination-previous is-disabled">Anteror</a> }
        { (page != pages)? <a className="pagination-next" onClick={nextPage}>Siguiente</a>: <a className="pagination-next is-disabled">Siguiente</a> }
      </nav>
      <div className="columns margin-top">
        <CharacterList characters={characters}/>
      </div>
      <nav className="pagination is-right" role="navigation" aria-label="pagination">
        { (page != 1)? <a className="pagination-previous" onClick={prevPage}>Anteror</a> : <a className="pagination-previous is-disabled">Anteror</a> }
        { (page != pages)? <a className="pagination-next" onClick={nextPage}>Siguiente</a>: <a className="pagination-next is-disabled">Siguiente</a> }
      </nav>
      <Footer />
    </>

  )
}
