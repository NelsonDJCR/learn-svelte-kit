<script>
	export let data;
	console.log(data.user.data);
</script>

<div class="justify-center w-full">
	<img src={data.user.data.avatar} alt="img user" class="rounded-full" />
	<h1>{data.user.data.first_name}</h1>
</div>
