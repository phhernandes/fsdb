import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";
import { PlayCircleOutlined,Search} from '@mui/icons-material';

async function carregarDados(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWE4Y2QwZTU5MjA4NWNlMzM2NDliOTAwZmRlYTFiOCIsInN1YiI6IjY1MGEwMGFiY2FkYjZiMDBhYmM2MmFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjaLLTQ82voanX0qaDRGqqdSk0vM-GHWUthGOwtpbpc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20464421/watchlist', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  
      
      const response = await fetch('https://api.themoviedb.org/3/account/20464421/watchlist/tv?language=pt-BR&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
} 

export default async function Favoritos() {

 const filmes = await carregarDados()
 console.log(filmes)

  return (
    <>
      <nav className="bg-slate-700 text-zinc-100 p-5">
        <ul className="flex flex-row justify-between px-10">
          <li className='flex space-x-0.5'>
            <PlayCircleOutlined className='text-3xl' style={{ color:'#FF5964' }}/>
            <a href="#" className="text-3xl font-bold">FSDB</a>
          </li>
          <li>
            <a href="/favoritos" className='text-2xl font-bold'>Favoritos</a>
          </li>
          <li>
          <div className="flex items-center text-base bg-slate-500 rounded-2xl " >
              <Search href="#" className="text-4xl pl-3" style={{ color:'#FF5964' }}/>
              <input
                type="text"
                placeholder="O que você deseja ouvir?"
                className="bg-transparent text-sm py-1 px-1 font-bold text-decoration-line: none text-slate-300"
              />
            </div>
          </li>
          <li>
            <a href="#" className='text-2xl font-bold'>Sobre</a>
          </li>
        </ul>
      </nav>


      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap px-40 justify-start text-zinc-100">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>
    </>
  )
}
