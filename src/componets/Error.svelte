<script>
	// export let show;
	export let test;
    console.log(test);
</script>

{#if test.error}
	<p class="text-red-500 mb-5">{test.message}</p>
{/if}
