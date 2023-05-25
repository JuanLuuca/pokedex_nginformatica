import favoritocomcor from '../../assets/favoritocomcor.png';
import pokebola from '../../assets/pokebola.png';
import pokebola_aberta from '../../assets/pokebola-aberta.png';
import { openLogoutType } from '../../@types/types';
import { Link, useNavigate } from 'react-router-dom';

export const Mockup = ({ openLogout }: openLogoutType) => {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
        return;
    }

    return (
        <div className={`${openLogout ? 'flex transition ease-in-out duration-500 opacity-95 translate-y-4 mt-[-250px]' : 'hidden'} justify-end items-end`}>
            <div onClick={(event: React.MouseEvent) => (event.stopPropagation())} className={`flex flex-col items-center h-40 w-40 bg-gradient-to-r from-slate-800 to-zinc-800 mr-16 rounded-md`}>
                <Link to="/favoritePokemons">
                <div className='flex items-center justify-center mr-1 mt-4 cursor-pointer'>
                    <img src={favoritocomcor} alt="favor" className='h-8 w-8 mr-1' />
                    <span className='text-sm mt-1 text-center text-white hover:text-orange-400'>Meus Favoritos</span>
                </div>
                </Link>
                <Link to="/capturePokemons">
                <div className='flex items-center justify-center mr-5 mt-4 cursor-pointer'>
                    <img src={pokebola} alt="captura" className='h-7 w-7' />
                    <span className='text-sm mt-1 text-center ml-2 text-white hover:text-orange-400'>Capturados</span>
                </div>
                </Link>
                <div className='flex items-center justify-center mr-2 mt-4 cursor-pointer' onClick={handleLogout}>
                    <img src={pokebola_aberta} alt="" className='h-7 w-7 cursor-pointer' />
                    <span className='text-sm mt-1 text-center ml-2 text-white hover:text-orange-400'>Sair da conta</span>
                </div>
            </div>
        </div>
    )
}