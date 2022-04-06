<script lang="ts">
	interface Links {
		title: string;
		icon: string;
		href?: string;
	}

	const links: Links[] = [
		{
			title: '22 July 2003',
			icon: 'fa-solid fa-calendar-days'
		},
		{
			title: 'teerutdev@gmail.com',
			icon: 'fa-solid fa-envelope',
			href: 'mailto:teerutdev@gmail.com'
		},
		{
			title: 'Teerut26',
			icon: 'fa-brands fa-github',
			href: 'https://github.com/Teerut26'
		},
		{
			title: 'Teerut Srithongdee',
			icon: 'fa-brands fa-facebook',
			href: 'https://facebook.com/profile.php?id=100008786231232'
		},
		{
			title: 'teerut_1t',
			icon: 'fa-brands fa-instagram',
			href: 'https://www.instagram.com/teerut_1t/'
		}
	];
</script>
<div class="bg-gradient-to-r border-0 from-[#766DFF] to-[#88F3FF] py-0 md:py-16 flex justify-center items-center ">
	<div class="bg-white rounded-0 md:rounded-3xl md:shadow-2xl md:max-w-6xl ">
		<div class="p-10 flex flex-col md:flex-row gap-5 md:gap-10 w-full items-center ">
			<div class="max-w-[15rem] md:max-w-md">
				<img class="w-full rounded-3xl" src="/profile.jpg" alt="" />
			</div>
			<div class="w-full flex flex-col gap-5 md:gap-10 justify-center items-center md:items-start">
				<div class="text-xl text-main2">สวัสดีครับทุกคน ผม!</div>
				<div class="flex flex-col text-main1">
					<div class="text-2xl ">ธีรุฒ ศรีทองดี</div>
					<div class="flex flex-col  items-center md:items-start">
						<div class="text-2xl font-extrabold">TEERUT</div>
						<div class="text-2xl font-extrabold">SRITHONGDEE</div>
					</div>
				</div>
				<div class="flex flex-col text-xl text-main2">
					<div>“เราจะไม่เป็นผู้ใช้งาน</div>
					<div>แต่เราจะเป็นผู้สร้าง”</div>
				</div>
				<div class="flex flex-col text-main2">
					{#each links as link}
						<a href={link.href} class="flex items-center gap-2">
							<i class={link.icon} />
							<div>{link.title}</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
