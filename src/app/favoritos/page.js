import CardFilme from "@/components/CardFilme";
import NavBar from "@/components/NavBar";
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
     <NavBar/>

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap px-40 justify-start text-zinc-100">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>
    </>
  )
}
