import './header.css';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';

function Header(){          
    const [buscaAnime,setBuscaAnime] = useState('')
    const [anime,setAnime] = useState([])

    const navigate = useNavigate();

    async function searchAnime(){
        if(!buscaAnime.trim()) return
        try{
            const resposta = await api.get('/anime',{
                params:{
                    q: buscaAnime,
                    limit: 20,
                    sfw: true
                
                    
                }            
            })
            setAnime(resposta.data.data);
            console.log('Animes enviados:', resposta.data.data.length);
            navigate('/', { state: resposta.data.data});
            console.log(resposta.data.data)
        }catch(error){
            console.log(error)
        }

        
        
    }  
    return(
        <>
        <header className='header'>
            <div>
                <Link to={'/'}className='titulo'>AnimeTECA</Link>
            </div>
            <div className='ola'>
                <Link className='favoritos' to='/favoritos'>Minha lista</Link>
            
                <input
                className='input'
                value={buscaAnime}
                onChange={(e) => setBuscaAnime(e.target.value)}
                type="search"
                placeholder="Pesquisar animes..."
                />
                <button className='button' onClick={searchAnime} >Buscar</button>
            </div>
        </header>
            

        </>
        

    )
}
export default Header;
