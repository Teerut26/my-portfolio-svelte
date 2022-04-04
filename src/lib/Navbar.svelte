<script lang="ts">
	interface Links {
		title: string;
		href?: string;
	}

	const links: Links[] = [
		{
			title: 'หน้าหลัก',
			href: '/'
		},
        {
			title: 'ผลงาน',
			href: '/project'
		}
	];
</script>

<div class="bg-gradient-to-r from-[#766DFF] to-[#88F3FF] text-white">
	<div class="max-w-6xl mx-auto py-5 flex justify-between px-5 items-center">
		<div class="text-xl">Teerut Portfolio</div>
		<div class="flex gap-5">
			{#each links as link}
				<a href={link.href}>
					{link.title}
				</a>
			{/each}
		</div>
	</div>
</div>
