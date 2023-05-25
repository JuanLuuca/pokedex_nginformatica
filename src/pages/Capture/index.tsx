import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { typeGetFavorite } from "../../@types/types";
import { Mockup } from "../../components/Mockup";
import { loginApi } from "../../services/api";
import { ModalInfosPokemon } from "../../components/ModalInfosPokemon";

export const CapturePage = () => {
    const [search, setSearch] = useState('');
    const [openLogout, setopenLogout] = useState(false);
    const [getCapture, setGetCapture] = useState<typeGetFavorite[]>([])

    function handleClickMockup() {
        if(openLogout) {
            setopenLogout(false);
        } else {
            setopenLogout(true);
        }
    }

    // endpoint para mostrar dados dos pokemons favoritos
    useEffect(() => {
        async function CaptureGetApi() {
            const userid = localStorage.getItem('user')
    
            try {
                const response = await loginApi.get(`/getuser/${userid}`);
                const data = response.data
                setGetCapture(data.user.infoCapturePokemon)
                console.log(data.user.email);
                localStorage.setItem('email', data.user.email);
            } catch (error) {
                return console.log('deu erro no endpoint')
            }
        }
        CaptureGetApi();
    }, [])

    return (
        <div className="">
            <Header handleClickMockup={handleClickMockup} />
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-white">Search</label>
            <div className="mt-11 mb-4">
                <div className="flex justify-center items-center">
                    <div className="mr-[-35px] z-50 flex items-center justify-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Procure um Pokémon" required />
                </div>
            </div>
            <div className="flex justify-end items-end mt-14">
                <Mockup openLogout={openLogout}/>
            </div>
            <div className="grid grid-cols-4">
            {getCapture.filter((filter) => (
                filter.name.toLowerCase().includes(search.toLowerCase())
            )) 
            .map(data => (
                <div key={data._id} className="max-w-[1440px] m-auto">
                    <div className="h-3/4 w-[24rem] p-2 m-3 rounded-md bg-gradient-to-r from-zinc-200 to-zinc-100">
                        <div className="flex flex-col">
                            <div className="flex justify-center items-center">
                                <img className="w-36 h-36" src={data.imagemPokemon} alt="" />
                            </div>
                            <div className="flex-col">
                                <p className="text-base text-black"><strong>Nome</strong>: {data.name}</p>
                                <p className="text-base text-black"><strong>Exp</strong>: {data.experiencia}</p>
                                <p className="text-base text-black"><strong>Peso</strong>: {data.peso}</p>
                                <p className="text-base text-black"><strong>Local de Captura</strong>: {data.local_captura == "" ? "Insira um valor" : data.local_captura}</p>
                                <p className="text-base text-black"><strong>Formas de Alimentação</strong>: {data.alimentacao == "" ? "Insira um valor" : data.alimentacao}</p>
                                <p className="text-base text-black"><strong>Fraquezas</strong>: {data.fraquezas == "" ? "Insira um valor" : data.fraquezas}</p>
                                <p className="text-base text-black"><strong>Ataques</strong>: {data.ataques == "" ? "Insira um valor" : data.ataques}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10 ml-6">    
                            <ModalInfosPokemon idCapture={data._id} idCaptureName={data.name} idCaptureImage={data.imagemPokemon} />
                        </div>
                    </div>
                </div>
            ))} 
            </div>
        </div>
    )
}


