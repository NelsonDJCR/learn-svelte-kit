import { writable } from 'svelte/store'
export const users = writable([]);

const fectchUser = async () => {
    const url = await fetch('https://reqres.in/api/users')
    const data = await url.json()
    const loadUsers = data.data.map((data, index) => {
        return {
            id: data.id,
            name: data.first_name,
            avatar: data.avatar,
        }
    })
    users.set(loadUsers)
}
fectchUser()