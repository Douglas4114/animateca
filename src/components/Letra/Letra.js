import './letra.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function AnimesPorLetra(){
    const [animes,setAnimes] = useState([])
    const { letra } = useParams();

    useEffect(() => {
        async function carregarAnimes(){
            try{
                const resposta = await api.get('/anime',{
                    params: {
                        letter: letra,
                        limit: 20,
                        sfw:true
                    }
                })
                console.log(resposta.data.data)
                setAnimes(resposta.data.data)
            }catch(error){
                console.log(error)
            }
        }
        carregarAnimes()
    },[letra])

    return(
        <div>
            <h1>Animes com a letra {letra}</h1>
            <section>
                    <div>
                        <span>Animes</span>
                        <div className='lista-animes'>
                            {animes.map((anime) =>(
                                <article key={anime.mal_id} className='card-anime'>
                                   <img className='img' 
                                    src={anime.images.jpg.image_url} 
                                    alt={anime.title}
                                   />
                                   <h2 className='h2'>{anime.title}</h2>
                                    <Link className='detalhes' to={`/detalhes/${anime.mal_id}`}>Detalhes</Link> 
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default AnimesPorLetra;
