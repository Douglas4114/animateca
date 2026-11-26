import './main.css'
import { Link,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';

function Main(){
    const [animes,setAnimes] = useState([])
    const location = useLocation()

    useEffect(() => {
        if(location.state){
            setAnimes(location.state)
        }else{
        async function carregarAnimes(){
            try{
                const resposta = await api.get('/top/anime?limit=20&sfw')
                console.log(resposta.data.data)
                setAnimes(resposta.data.data)
            }catch(error){
                console.log(error)
            }
        }
        carregarAnimes()
    }
    },[location.state])
    return(
        <>
            <div className='principal'>
                <div className='aside'>
                    {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letra) => (
                        <>
                        <Link className="link-sem-sublinhado" key={letra} to={`/letra/${letra}`}>
                            {letra}
                        </Link>
                        </>
                    ))}
                    <Link className='link-sem-sublinhado' to='/favoritos'>Favoritos</Link>
                </div>
                <section >
                    <div className='section'>
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
        </>
    )
}
export default Main;
