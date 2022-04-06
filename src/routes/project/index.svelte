<script lang="ts">
	import type { Repo } from '$lib/interfaces/Github';
	export let githuRepos: Repo[] | undefined;

	let page: number = 2;
	let loading: boolean = false;
	let hasMore: boolean = true;

	const getMore = async () => {
		loading = true;
		let res = await fetch(`https://api.github.com/users/Teerut26/repos?page=${page}`);
		let data: Repo[] = await res.json();
		githuRepos = [...githuRepos, ...data];
		if (data.length === 0) return (hasMore = false);
		page += 1;
		loading = false;
	};
</script>

<div class="bg-white h-full">
	<div class="max-w-6xl mx-auto px-5 py-5 flex flex-wrap justify-center gap-3">
		<!-- {JSON.stringify(githuRepos)} -->
		{#each githuRepos as githuRepo}
			<a href={githuRepo.svn_url} class="stats bg-base-300 shadow max-w-[20rem] w-full text-white">
				<div class="stat">
					<div class="stat-figure text-secondary">
						{#if githuRepo.language === null || githuRepo.language === 'mcfunction'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-8 h-8 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/></svg
							>
						{/if}
						{#if githuRepo.language === 'Jupyter Notebook'}
							<img class="w-[3rem]" src={`/icons/jupyter.svg`} alt="" />
						{/if}
						{#if githuRepo.language !== null}
							<img
								class="w-[3rem]"
								src={`/icons/${githuRepo.language.toLocaleLowerCase()}.svg`}
								alt=""
							/>
						{/if}
					</div>
					<div class="truncate">{githuRepo.name}</div>
					<!-- <div class="stat-value">89,400</div> -->
					<div class="stat-desc">{githuRepo.language}</div>
				</div>
			</a>
		{/each}
	</div>
	{#if hasMore}
		<div class="flex justify-center mb-3">
			{#if loading}
				<div class="btn btn-sm btn-primary loading">loading</div>
			{:else}
				<div on:click={() => getMore()} class="btn btn-sm btn-primary">More</div>
			{/if}
		</div>
	{/if}
</div>
