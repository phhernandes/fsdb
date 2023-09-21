"use client"

import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react"

export default function CardFilme({filme}){
    const[ favorito,setFavorito ] = useState(false) //hooks 
    const image_url = "https://image.tmdb.org/t/p/w200" + filme.poster_path

    useEffect( () => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(f => f.id === filme.id)
        setFavorito(favorito)
    }, [] )

    function favoritar(){
        setFavorito(true)

        const options = {  method: 'POST',  headers: {    accept: 'application/json',    'content-type': 'application/json',    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2Q3NTJiYmNmNjU5YjZjMWVjODBlODZiNmQxYWMzMiIsInN1YiI6IjY1MGEwMGFiY2FkYjZiMDBhYmM2MmFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Maf9QCMRyaSm-AQISXnLTtnv2tpAiSZy9Q_DGgnFtc4'  },  body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: true})};fetch('https://api.themoviedb.org/3/account/20464421/watchlist', options)  .then(response => response.json())  .then(response => console.log(response))  .catch(err => console.error(err));

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(filme)
        localStorage.setItem( "favoritos", JSON.stringify(favoritos) )
    }

    function desfavoritar(){
        setFavorito(false)

        const options = {  method: 'POST',  headers: {    accept: 'application/json',    'content-type': 'application/json',    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2Q3NTJiYmNmNjU5YjZjMWVjODBlODZiNmQxYWMzMiIsInN1YiI6IjY1MGEwMGFiY2FkYjZiMDBhYmM2MmFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Maf9QCMRyaSm-AQISXnLTtnv2tpAiSZy9Q_DGgnFtc4'  },  body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: false})};fetch('https://api.themoviedb.org/3/account/20464421/watchlist', options)  .then(response => response.json())  .then(response => console.log(response))  .catch(err => console.error(err));

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizados = favoritos.filter(f => f.id !== filme.id )
        localStorage.setItem( "favoritos", JSON.stringify(favoritosAtualizados) )
    }

    return (
        <div className="flex flex-col gap-1 items-center bg-slate-700 p-3 rounded-lg w-52 m-2 shadow-md relative">
            {favorito ? (
            <HeartIcon
            className="h-6 w-6 text-[#FF5964] top-5 right-5 absolute cursor-pointer"
            onClick={desfavoritar}
         />
        ) : (
            <HeartIconOutline
            className="h-6 w-6 text-zinc-100 top-5 right-5 absolute cursor-pointer hover:text-[#FF5964]"
            onClick={favoritar}
            />
        )}
            <img className="rounded-lg" src={image_url} alt="poster do filme" />
            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {filme.title}
            </span>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <span className="font-light text-lg text-center">
                    {filme.vote_average.toFixed(1)}
                </span>
            </div>
    </div>
    );
}   