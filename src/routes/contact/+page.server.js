

import {fail, redirect} from '@sveltejs/kit'
let emails = []


export const load = () => {
    return {
        title: 'lorem',
        emails
    }
}

export const actions = {
    register: async ({ request }) => {
        const data = await request.formData()
        const email = data.get('email')
        const name = data.get('name')
        const id = crypto.randomUUID()

        if (name === '') {
            return fail(400,{
                error:true,
                message:'this field is required name',
                input:'name',
            })
        }
        if (email === '') {
            return fail(400,{
                error:true,
                message:'this field is required email',
                input:'email',
            })
        }


        const newEmail = {
            email, id
        }
        emails.push(newEmail)
    },
    delete: async ({ request }) => {
        const data = await request.formData()
        const id = data.get('id')
        emails = emails.filter(email => email.id != id)
    }
}