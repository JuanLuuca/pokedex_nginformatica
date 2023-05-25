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

export interface idCaptureType {
    idCapture: number
    idCaptureName: string
    idCaptureImage: string
}

export interface typeGetDataPokemon {
    id: number,
    name: string,
    experiencia: number,
    peso: number
}

export interface typeGetFavorite {
    _id: number
    id: number
    name: string
    experiencia: number
    peso: number
    imagemPokemon: string
    habitat: string
    ataques: string
    fraquezas: string
    alimentacao: string
    local_captura: string
}

export interface openLogoutType {
    openLogout: boolean
}

export interface MockupType {
    handleClickMockup: () => void
}