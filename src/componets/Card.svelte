<script>
    export let user
    const card = 'p-6 bg-gray-100 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center'
    const circle = 'rounded-full border border-gray-100 shadow-sm'
</script>

<a href={`/users/${user.id}`} class={card}>
    <img src={user.avatar} alt="img user" class={circle}>
    <h1>{user.name}</h1>
</a>