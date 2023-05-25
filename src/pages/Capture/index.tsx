import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { typeGetDataPokemon, typeGetFavorite } from "../../@types/types";
import pokebolaimg from '../../assets/pokebola.png';
import favorito from '../../assets/favoritocomcor.png';
import { Mockup } from "../../components/Mockup";
import { loginApi } from "../../services/api";
import pokebolasemcor from '../../assets/pokebolasemcor.png'
import { toast } from "react-toastify";

export const CapturePage = () => {
    const [search, setSearch] = useState('');
    const [openLogout, setopenLogout] = useState(false);
    // const [capturePokemon, setCapturePokemon] = useState<typeGetDataPokemon[]>([]);
    // const [capturadoImage, setCapturadoImage] = useState<number[]>([]);

    const [getCapture, setGetCapture] = useState<typeGetFavorite[]>([])

    function handleClickMockup() {
        if(openLogout) {
            setopenLogout(false);
        } else {
            setopenLogout(true);
        }
    }

    // pega os favoritos e os capturados em tempo real
    // useEffect(() => {
    //     console.log('pokemons capturados ', capturePokemon)
    // }, [capturePokemon]);

    // endpoint para inserir dados de capturados
    // async function CaptureApi() {
    //     const userid = localStorage.getItem('user')

    //     try {
    //         const response = await loginApi.post(`/capturepokemon/${userid}`, capturePokemon);
    //         if(response) {
    //             setCapturadoImage([]);
    //             setCapturePokemon([]);
    //             return toast.success('Pokémons capturados com sucesso!')
    //         }
    //     } catch (error) {
    //         return console.log('deu erro no endpoint')
    //     }
    // }

    // endpoint para mostrar dados dos pokemons favoritos
    useEffect(() => {
        async function CaptureGetApi() {
            const userid = localStorage.getItem('user')
    
            try {
                const response = await loginApi.get(`/getuser/${userid}`);
                const data = response.data
                setGetCapture(data.user.infoCapturePokemon)
            } catch (error) {
                return console.log('deu erro no endpoint')
            }
        }
        CaptureGetApi();
    }, [])
    

    // função que armazena os capturados em um array
    // function handleGetCapturePokemon(id: number, name: string, experiencia: number, peso: number, imagemPokemon: string) {   
        
    //     // verificada o id clicado com id que esta no array e preenche a imagem com sem cor e com cor
    //     if (capturadoImage.includes(id)) {
    //         setCapturadoImage((prevFavoritos) => prevFavoritos.filter((favId) => favId !== id));
    //     } else {
    //         setCapturadoImage((prevFavoritos) => [...prevFavoritos, id]);
    //     }

    //     let getCapturePokemon = {
    //         id: id,
    //         name: name,
    //         experiencia: experiencia,
    //         peso: peso,
    //         imagemPokemon: imagemPokemon,
    //         habitat: '',
    //         local_captura: '',
    //         alimentacao: '',
    //         fraquezas: '',
    //         ataques: '',        
    //     }

    //     const index = capturePokemon.findIndex((val) => val.id === id);

    //     if (index !== -1) {
    //         setCapturePokemon((prevValores) => {
    //           const novosValores = [...prevValores];
    //           novosValores.splice(index, 1); // Remove o objeto do array
    //           return novosValores;
    //         });
    //     } else {
    //         setCapturePokemon((prevValores) => [...prevValores, getCapturePokemon]);
    //     }
    // }

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
                    {/* {capturePokemon.length != 0 ?
                        <button className="h-12 w-36 rounded-md bg-red-400 ml-4 text-white text-sm ease-in duration-300 hover:bg-red-500" onClick={CaptureApi}>Capturar Pokémons</button>
                    : null} */}
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
                    <div className="h-44 w-[26rem] p-2 m-3 rounded-md bg-gradient-to-r from-zinc-200 to-zinc-100">
                        <div className="flex items-center">
                            <img className="w-36 h-36" src={data.imagemPokemon} alt="" />
                            <div className="flex-col">
                                <p className="text-center text-base text-black">Nome: {data.name}</p>
                                <p className="text-center text-base text-black">Exp: {data.experiencia}</p>
                                <p className="text-center text-base text-black">Peso: {data.peso}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-[-35px]">    
                        {/* <img src={capturadoImage.includes(data._id ) ? pokebolaimg : pokebolasemcor} alt="Capturar" title="Capturar" className="h-12 w-12 cursor-pointer" /> */}
                        <button className="h-12 w-36 rounded-md bg-red-400 ml-4 mt-1 text-white text-sm ease-in duration-300 hover:bg-red-500">Adicionar Informações</button>
                        </div>
                    </div>
                </div>
            ))} 
            </div>
        </div>
    )
}


