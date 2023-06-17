<script>
	import { users } from '../stores/userStore';
	import Card from '../componets/Card.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="w-50">
		<img
			src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
			alt="img tailwind"
			class="rounded-3xl m-2"
			width="200"
		/>
	</div>
	<div class="w-50">
		<h1 class="bg-red">API</h1>
	</div>
</div>

<div class="p-5 grid gap-5 md:grid-cols-3">
	{#each $users as user}
		<Card {user} />
	{:else}
		There arent records
	{/each}
</div>
