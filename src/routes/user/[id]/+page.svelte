<script>
	export let data;
	console.log(data.user.name);
</script>

<div class="justify-center w-full">
	<img src={data.user.image} alt="img user" class="rounded-full" />
	<h1>{data.user.name}</h1>
</div>
