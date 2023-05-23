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