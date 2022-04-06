<script lang="ts">
	import { onMount } from 'svelte';
	import type { GithubRoot } from './interfaces/Github';

	let githubData: GithubRoot | undefined;

	onMount(async () => {
		let res = await fetch('https://api.github.com/users/teerut26');
		githubData = await res.json();
	});
</script>

<div class="bg-white py-10">
	<div class="max-w-6xl mx-auto flex flex-col items-center gap-5 px-10">
		<div>
			<div class="text-main1 text-3xl">GITHUB</div>
		</div>
		<div class="flex flex-col md:flex-row">
			<a href={githubData?.html_url} class="stats hover:scale-110 transform duration-100 rounded-[2.5rem] bg-gradient-to-r border-0 from-[#766DFF] to-[#88F3FF] text-white  flex flex-col md:flex-row shadow">
                <div class="stat flex">
                    <div class="stat-figure text-secondary">
                      <div class="avatar online">
                        <div class="w-16 rounded-full">
                          <img src={githubData?.avatar_url} alt="profile" />
                        </div>
                      </div>
                    </div>
                    <div class="text-[2.2rem] font-bold self-center">{githubData?.login}</div>
                  </div>
				<div class="stat flex flex-col items-center">
					<div class="stat-title">Repository</div>
					<div class="stat-value">{githubData?.public_repos}</div>
				</div>

				<div class="stat flex flex-col items-center">
					<div class="stat-title">Followers</div>
					<div class="stat-value">{githubData?.followers}</div>
				</div>

				<div class="stat flex flex-col items-center">
					<div class="stat-title">Following</div>
					<div class="stat-value">{githubData?.following}</div>
				</div>
			</a>
		</div>
	</div>
</div>
