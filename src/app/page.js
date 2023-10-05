import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";
import './globals.css';
import NavBar from "@/components/NavBar";

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
      <NavBar/>

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap px-40 gap-y-5 justify-between text-zinc-100">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>
    </>
  )
}
