<script lang="ts">
	interface Skill {
		title: string;
		icon: string;
	}

	const skillLang: Skill[] = [
        {
			title: 'C',
			icon: '/icons/c.svg'
		},
		{
			title: 'CPP',
			icon: '/icons/cpp.svg'
		},
        {
			title: 'Go',
			icon: '/icons/go.svg'
		},
		{
			title: 'Java',
			icon: '/icons/java.svg'
		},
		{
			title: 'Python',
			icon: '/icons/python.svg'
		},
        {
			title: 'Html',
			icon: '/icons/html.svg'
		},
        {
			title: 'Css',
			icon: '/icons/css.svg'
		},
        {
			title: 'Javascript',
			icon: '/icons/javascript.svg'
		},
        {
			title: 'Typescript',
			icon: '/icons/typescript.svg'
		},
         {
			title: 'Graphql',
			icon: '/icons/graphql.svg'
		},
        {
			title: 'React',
			icon: '/icons/react.svg'
		},
        {
			title: 'React Typescript',
			icon: '/icons/react_ts.svg'
		},
        {
			title: 'NextJS',
			icon: '/icons/next.svg'
		},
        {
			title: 'Vue',
			icon: '/icons/vue.svg'
		},
        {
			title: 'NuxtJS',
			icon: '/icons/nuxt.svg'
		},
        {
			title: 'Svelte',
			icon: '/icons/svelte.svg'
		},
        {
			title: 'sql',
			icon: '/icons/sql.svg'
		},
        {
			title: 'Firebase',
			icon: '/icons/firebase.svg'
		},
        {
			title: 'Docker',
			icon: '/icons/docker.svg'
		},
       
	];
</script>

<div class="bg-white py-10">
	<div class="max-w-6xl mx-auto flex flex-col items-center gap-5 px-10">
		<div>
			<div class="text-main1 font-bold text-3xl">MY SKILL</div>
		</div>
		<div>
			<div class="flex flex-wrap justify-center gap-5 w-full max-w-2xl">
				{#each skillLang as lang}
					<div class="flex items-center">
						<div>
							<img title={lang.title} class="w-20  drop-shadow-md" src={lang.icon} alt="" />
						</div>
						<!-- <div class="text-main1 text-2xl">{lang.title}</div> -->
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
