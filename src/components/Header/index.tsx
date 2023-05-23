import pokedex from '../../assets/camera.png';

export const Header = () => {
    return (
        <div className="flex items-center justify-between w-full bg-blue-900 h-20">
            <img alt="Pokedex" src="https://ik.imagekit.io/hwyksvj4iv/pokedex_N_WgWrJK0s.png" className="w-40 h-16 ml-3" />
            <img src={pokedex} title="pokedex" className="mr-12 h-14 w-16 cursor-pointer" />
        </div>
    )
}