import { useEffect, useState } from "react";

export const useFetchApi = (nav) => {

    const [state, setState] = useState({
        chatacters: [],
        loading: true,
        page: nav,
        pages: null
    })  

    const prevPage = () =>{
        setState({
            ...state, page: page - 1
        });
      }
    
    const nextPage = () =>{
        setPage({
            ...state, page: page + 1
        });
    }
  
    useEffect(() => {
        async function fetchData() {
            setState({...state, loading: true})
            const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${state.page}`);
            const data = await resp.json();
            setState({
              ...state,
              chatacters: data.results,
              loading: false,
              pages: data.info.pages
            })
          } 
      fetchData();
    }, [state.page]);

    return({
        chatacters: state.chatacters,
        loading: state.loading,
        page: state.page,
        pages: state.pages,
        prevPage,
        nextPage
    })
}
