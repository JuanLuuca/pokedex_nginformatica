import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { typeGetDataPokemon, typePokedex } from "../../@types/types";
import pokebolaimg from '../../assets/pokebola.png';
import favorito from '../../assets/favoritocomcor.png';
import favoritosemcor from '../../assets/favorito.png';
import { Mockup } from "../../components/Mockup";
import { loginApi } from "../../services/api";
import pokebolasemcor from '../../assets/pokebolasemcor.png'
import { toast } from "react-toastify";

export const Home = () => {
    const [poke, setPoke] = useState<typePokedex[]>([]);
    const [search, setSearch] = useState('');
    const [openLogout, setopenLogout] = useState(false);
    const [favoritePokemon, setFavoritePokemon] = useState<typeGetDataPokemon[]>([]);
    const [capturePokemon, setCapturePokemon] = useState<typeGetDataPokemon[]>([]);
    const [favoritosImage, setFavoritosImage] = useState<number[]>([]);
    const [capturadoImage, setCapturadoImage] = useState<number[]>([]);

    // pega a api de todos os pokemons, imagens e etc
    async function UsersPoke() {
        let endpoints = [];
        try {
            for(var i = Math.floor(Math.random() * 30); i < Math.floor(Math.random() * 2000) + 5; i++) {
                endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            }
            await Promise.all(endpoints.map((endpoint) => fetch(endpoint))).then((res) => Promise.all(res.map(async r => r.json())))
            .then((res) => setPoke(res))
        } catch (error) {
            console.log(error);
        }
    }

    // excuta apenas uma vez a api dos pokemons
    useEffect(() => {
        UsersPoke();
    }, [])

    function handleClickMockup() {
        if(openLogout) {
            setopenLogout(false);
        } else {
            setopenLogout(true);
        }
    }

    // pega os favoritos e os capturados em tempo real
    useEffect(() => {
        console.log('pokemons favoritos ', favoritePokemon);
        console.log('pokemons capturados ', capturePokemon)
    }, [favoritePokemon, capturePokemon]);

    // endpoint para inserir dados de favoritados
    async function FavoriteApi() {
        const userid = localStorage.getItem('user')

        try {
            const response = await loginApi.post(`/favoritepokemon/${userid}`, favoritePokemon);
            if(response) {
                setFavoritePokemon([]);
                setFavoritosImage([]);
                return toast.success('Pokémons favoritados com sucesso!')
            }
        } catch (error) {
            return console.log('deu erro no endpoint')
        }
    }

    // endpoint para inserir dados de capturados
    async function CaptureApi() {
        const userid = localStorage.getItem('user')

        try {
            const response = await loginApi.post(`/capturepokemon/${userid}`, capturePokemon);
            if(response) {
                setCapturadoImage([]);
                setCapturePokemon([]);
                return toast.success('Pokémons capturados com sucesso!')
            }
        } catch (error) {
            return console.log('deu erro no endpoint')
        }
    }

    // função que armazena os capturados em um array
    function handleGetCapturePokemon(id: number, name: string, experiencia: number, peso: number, imagemPokemon: string) {   
        
        // verificada o id clicado com id que esta no array e preenche a imagem com sem cor e com cor
        if (capturadoImage.includes(id)) {
            setCapturadoImage((prevFavoritos) => prevFavoritos.filter((favId) => favId !== id));
        } else {
            setCapturadoImage((prevFavoritos) => [...prevFavoritos, id]);
        }

        let getCapturePokemon = {
            id: id,
            name: name,
            experiencia: experiencia,
            peso: peso,
            imagemPokemon: imagemPokemon,
            habitat: '',
            local_captura: '',
            alimentacao: '',
            fraquezas: '',
            ataques: '',        
        }

        const index = capturePokemon.findIndex((val) => val.id === id);

        if (index !== -1) {
            setCapturePokemon((prevValores) => {
              const novosValores = [...prevValores];
              novosValores.splice(index, 1); // Remove o objeto do array
              return novosValores;
            });
        } else {
            setCapturePokemon((prevValores) => [...prevValores, getCapturePokemon]);
        }
    }

    // função que armazena os favoritos em um array
    function handleGetFavoritePokemon(id: number, name: string, experiencia: number, peso: number, imagemPokemon: string) {   
        
        // verificada o id clicado com id que esta no array e preenche a imagem com sem cor e com cor
        if (favoritosImage.includes(id)) {
            setFavoritosImage((prevFavoritos) => prevFavoritos.filter((favId) => favId !== id));
        } else {
            setFavoritosImage((prevFavoritos) => [...prevFavoritos, id]);
        }

        let getFavoritePokemon = {
            id: id,
            name: name,
            experiencia: experiencia,
            peso: peso,
            imagemPokemon: imagemPokemon
        }

        const index = favoritePokemon.findIndex((val) => val.id === id);

        if (index !== -1) {
            setFavoritePokemon((prevValores) => {
              const novosValores = [...prevValores];
              novosValores.splice(index, 1); // Remove o objeto do array
              return novosValores;
            });
        } else {
            setFavoritePokemon((prevValores) => [...prevValores, getFavoritePokemon]);
        }
    }

    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
            <Header handleClickMockup={handleClickMockup} />
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-white">Search</label>
            <div className="mt-11 mb-4">
                <div className="flex justify-center items-center">
                    <div className="mr-[-35px] z-50 flex items-center justify-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procure um Pokémon" required />
                    {favoritePokemon.length != 0 ?
                        <button className="h-12 w-36 rounded-md bg-yellow-400 ml-4 text-white text-sm ease-in duration-300 hover:bg-yellow-500" onClick={FavoriteApi}>Adicionar favoritos</button>
                    : null}
                    {capturePokemon.length != 0 ?
                        <button className="h-12 w-36 rounded-md bg-red-400 ml-4 text-white text-xs ease-in duration-300 hover:bg-red-500" onClick={CaptureApi}>Adicionar Capturados</button>
                    : null}
                </div>
            </div>
            <div className="flex justify-end items-end mt-14">
                <Mockup openLogout={openLogout}/>
            </div>
            <div className="grid grid-cols-4">
            {poke.filter((filter) => (
                filter.name.toLowerCase().includes(search.toLowerCase())
            ))
            .map(data => (
            <div key={data.id} className="max-w-[1440px] m-auto">
                <div className="h-44 w-[26rem] p-2 m-3 rounded-md bg-gradient-to-r from-zinc-200 to-zinc-100">
                    <div className="flex items-center">
                        <img className="w-36 h-36" src={data.sprites.front_default} alt="" />
                        <div className="flex-col">
                            <p className="text-center text-base text-black">Nome: {data.name}</p>
                            <p className="text-center text-base text-black">Exp: {data.base_experience}</p>
                            <p className="text-center text-base text-black">Peso: {data.weight}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-[-35px]">    
                        <img src={capturadoImage.includes(data.id) ? pokebolaimg : pokebolasemcor} alt="Capturar" title="Capturar" className="h-12 w-12 cursor-pointer" onClick={() => handleGetCapturePokemon(data.id, data.name, data.base_experience, data.weight, data.sprites.front_default)} />
                        <img src={favoritosImage.includes(data.id) ? favorito : favoritosemcor} alt="Favorito" title="Favoritar" className="h-14 w-16 ml-1 cursor-pointer" onClick={() => handleGetFavoritePokemon(data.id, data.name, data.base_experience, data.weight, data.sprites.front_default)} />
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}