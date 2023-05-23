import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { typePokedex } from "../../@types/types";
import pokebolaimg from '../../assets/pokebola.png';
import favorito from '../../assets/favoritocomcor.png';

export const Home = () => {
    const [poke, setPoke] = useState<typePokedex[]>([]);
    const [search, setSearch] = useState('');

    async function UsersPoke() {
        let endpoints = [];
        try {
            for(var i = Math.floor(Math.random() * 50); i < Math.floor(Math.random() * 1000) + 5; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            }
            await Promise.all(endpoints.map((endpoint) => fetch(endpoint))).then((res) => Promise.all(res.map(async r => r.json())))
            .then((res) => setPoke(res))
        } catch (error) {
            console.log(error);
        }
    }

    console.log(poke);
    

    useEffect(() => {
        UsersPoke();
    }, [])

    function handleSearchClick() {
        search
    }

    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
            <Header />
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="mt-4 mb-4">
                <div className="flex justify-center items-center">
                    <div className="mr-[-35px] z-50 flex items-center justify-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procure um Pokémon" required />
                </div>
            </div>
            <div className="grid grid-cols-4">
            {poke.filter((filter) => (
                filter.name.toLowerCase().includes(search.toLowerCase())
            ))
            .map(data => (
                <div key={data.id} className="max-w-[1440px] m-auto">
                    <div className="h-44 w-[26rem] p-2 m-3 rounded-md bg-gradient-to-r from-gray-950 to-zinc-900">
                        <div className="flex items-center">
                            <img className="w-36 h-36" src={data.sprites.front_default} alt="" />
                            <div className="flex-col">
                                <p className="text-center text-base text-white">Nome: {data.name}</p>
                                <p className="text-center text-base text-white">Exp: {data.base_experience}</p>
                                <p className="text-center text-base text-white">Peso: {data.weight}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-[-35px]">    
                            <img src={pokebolaimg} alt="Capturar" title="Capturar" className="h-12 w-12 cursor-pointer" />
                            <img src={favorito} alt="" title="Favoritar" className="h-14 w-16 ml-2 cursor-pointer" />
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}