import './favoritos.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favoritos(){
    const [anime,setAnime] = useState([])
    useEffect(() => {
        const favoritos = localStorage.getItem('animeteca_favoritos')
        const favoritosArray = JSON.parse(favoritos) || []
        setAnime(favoritosArray)
    },[])
    function removerFav(id){
        const novaLista = anime.filter((animes) => animes.mal_id !== id)
        setAnime(novaLista)
        localStorage.setItem('animeteca_favoritos', JSON.stringify(novaLista))
    }
    

    return(
        <div className='fav-princ'>
            <h1>Favoritos</h1>
                {anime.length > 0 ?(
                    <>
                        <div className='divx'>
                            <h1 className='h1'>Tela favoritos</h1>
                            <ul className='ul'>
                                {anime.map((anime) => (
                                    <li className='li' key={anime.mal_id}>
                                        <Link to={`/detalhes/${anime.mal_id}`}>
                                            {anime.title}
                                        </Link>
                                        <button onClick={() =>removerFav(anime.mal_id)} className='button2'>Remover dos favoritos</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    
                    </>
                ):(
                    <p>Não tem nenhum anime na sua lista de favoritos</p>
                )}

            
        </div>
    )
}

export default Favoritos;
