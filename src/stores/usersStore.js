import { writable } from 'svelte/store'
export const users = writable([]);

const fectchUser = async () => {
    const url = await fetch('https://rickandmortyapi.com/api/character')
    const data = await url.json()
    const loadUsers = data.results.map((data, index) => {
        return {
            id: data.id,
            name: data.name,
            avatar: data.image,
        }
    })
    users.set(loadUsers)
}
fectchUser()