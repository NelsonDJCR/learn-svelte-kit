<script>
	// @ts-nocheck
	export let data;
	let character = '';
	let info = '0';
</script>

<h1 class="mt-9 py-9 text-5xl">{data.title}</h1>
<input
	type="text"
	class="w-full rounded-md text-lg p-4 border-2 my-2"
	bind:value={character}
	placeholder="Character"
/>
<div class="mt-4" />

<select bind:value={info} class="w-full rounded-md text-lg p-4 border-2 my-2 mb-5">
	<option value="0">Select</option>
	<option value="origin">origin</option>
	<option value="location">location</option>
</select>

<a
	href={`/character/${character}/${info}`}
	class="rounded bg-sky-500 text-white p-2 px-4 hover:bg-sky-600 w-40 mt-5">Send</a
>
