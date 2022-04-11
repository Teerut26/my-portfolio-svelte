<script lang="ts">
	import { navigating } from '$app/stores';

	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';

	import '../app.css';
	import Loading from '$lib/Loading.svelte';
	import { loading } from '$lib/stores/loading';
	import Kofi from '$lib/Kofi.svelte';

	$: $loading = !!$navigating;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
		integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<style>
		* {
			font-family: 'Prompt', sans-serif;
		}
	</style>
	<title>Teerut Portfolio</title>
</svelte:head>
<Loading />
<Kofi />
<div>
	<Navbar />
	<div class="flex flex-col h-screen">
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</div>
