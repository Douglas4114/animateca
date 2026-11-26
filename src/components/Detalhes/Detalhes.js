import './detalhes.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import api from '../../services/api';

function Detalhes(){
    const { id } = useParams();
    const [anime,setAnime] = useState(null)
    useEffect(() => {
        async function carregarAnimes(){
            try{
                const resposta = await api.get(`/anime/${id}/full`)
                   
            
                console.log(resposta.data.data)
                setAnime(resposta.data.data)
            }catch(error){
                console.log(error)
            }
        }
        carregarAnimes()
    },[id])
    function adicionarFavoritos(){
        const favoritos = localStorage.getItem('animeteca_favoritos')
        const favjason = JSON.parse(favoritos) || []
        const jaExiste = favjason.some((favorito) => favorito.mal_id === anime.mal_id)
        if(!jaExiste){
            favjason.push(anime)
            localStorage.setItem('animeteca_favoritos', JSON.stringify(favjason))
        }
    }
    

    return(
        <div className='principal2'>
                {anime && (
                    <>
                        <div className='titulo'>
                            <h2>{anime.title}</h2>
                            
                        </div>
                            <img className='img-detallhes' 
                                src={anime.images.jpg.image_url} 
                                alt={anime.title}
                            />
                        
                        <span className='sinopse'>{anime.synopsis}</span>
                        <span>{anime.score}</span>
                        <span>{anime.genres.map((genero) => (
                            <span key={genero.mal_id}>
                                {genero.name}
                            </span>
                        ))}</span>
                        <button className='fav' onClick={adicionarFavoritos}>Adicionar nos favoritos</button>
                    
                    </>
                )}

            
        </div>
    )
}

export default Detalhes;
