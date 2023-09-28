import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";
import { PlayCircleOutlined,Search, VideocamOffOutlined} from '@mui/icons-material';
import './globals.css';

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/tv/week?api_key=51a8cd0e592085ce33649b900fdea1b8&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

 const filmes = await carregarDados()

  return (
    <>
      <nav className="bg-slate-700 text-zinc-100 p-5">
        <ul className="flex flex-row justify-between px-10">
          <li className='flex space-x-0.5'>
          <PlayCircleOutlined className='text-3xl' style={{ color:'#FF5964' }}/>
            <a href="/" className="text-3xl font-bold">FSDB</a>
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

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap px-40 gap-y-5 justify-between text-zinc-100">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>
    </>
  )
}
