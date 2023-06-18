export const load = async ({fetch, params }) => {

    const character = params.character
    const data = params.data

    const res = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
    const ch = await res.json()
    return {
        ch
    };
}