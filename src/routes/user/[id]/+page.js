export const load = async ({fetch, params }) => {
    const res = await fetch(`https://reqres.in/api/users/${params.id}`)
    const user = await res.json()
    return {
        user
    };
}