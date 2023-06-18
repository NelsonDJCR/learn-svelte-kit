export const load = async ({fetch, params }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const user = await res.json()
    console.log(user);
    return {
        user
    };
}