<script lang="ts" context="module">
	export const load = async () => {
		let res = await fetch('https://api.github.com/users/teerut26');
		let githubData: GithubRoot = await res.json();
		return {
			props: {
				githubData
			}
		};
	};
</script>

<script lang="ts">
	import Github from '$lib/Github.svelte';
	import Hello from '$lib/Hello.svelte';
	import type { GithubRoot } from '$lib/interfaces/Github';
	import Skill from '$lib/Skill.svelte';

	export let githubData: GithubRoot | undefined;
</script>

<div class="w-full">
	<Hello />
	<Skill />
	<Github {githubData} />
</div>
