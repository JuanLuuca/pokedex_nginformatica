export interface typePokedex {
    includes(): unknown;
    id: number,
    name: string,
    base_experience: number,
    weight: number,
    sprites: {
        front_default: string
    }
}

export interface typeGetDataPokemon {
    id: number,
    name: string,
    experiencia: number,
    peso: number
}

export interface typeGetFavorite {
    _id: number
    id: number,
    name: string,
    experiencia: number,
    peso: number,
    imagemPokemon: string
}

export interface openLogoutType {
    openLogout: boolean
}

export interface MockupType {
    handleClickMockup: () => void
}