<script>
	import { enhance } from '$app/forms';
	import Error from '../../componets/Error.svelte';
	export let data;
	export let form;
</script>

<svelte:head>
	<title>Conatct</title>
</svelte:head>
<h1 class="py-5 text-4xl">Contact</h1>
<form method="post" action="?/register" autocomplete="off" use:enhance>
	<input
		type="text"
		class="w-full rounded-md text-lg p-4 border-2 my-2"
		name="name"
		value={form?.name ?? ''}
		placeholder="name"
	/>

	{#if form?.input == 'name'}
		<Error test={form}  />
	{/if}

	<input
		type="text"
		class="w-full rounded-md text-lg p-4 border-2 my-2 mb-5"
		name="email"
		placeholder="email"
	/>

    {#if form?.input == 'email'}
		<Error test={form}  />
	{/if}
	<input
		value="Send"
		type="submit"
		class="rounded bg-sky-500 text-white p-2 px-4 hover:bg-sky-600 w-40"
	/>
</form>

{#each data.emails as item}
	<table>
		<tr>
			<th>email</th>
			<th>action</th>
		</tr>
		<tr>
			<td>{item.email}</td>
			<td>
				<form action="?/delete" method="post" use:enhance>
					<input type="hidden" name="id" value={item.id} />
					<button class="py-2 px-4 bg-red-500 text-white rounded-lg" type="submit">Delete</button>
				</form>
			</td>
		</tr>
	</table>
{:else}
	there aren´t records
{/each}
