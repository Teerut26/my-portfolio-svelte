<script lang="ts">
	let show: boolean = false;
</script>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
	<div class="relative ">
        <div class="absolute top-0 right-0 ">
            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          </div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<iframe
			class="h-[35rem] rounded-xl bg-white"
			scrolling="no"
			src="https://ko-fi.com/teerut/?hidefeed=true&widget=true&embed=true"
			frameborder="0"
		/>
	</div>
</div>

<div class="fixed flex flex-col gap-2 z-50 bottom-2 left-2">
	<div class="relative">
		<label
			for="my-modal"
			class="bg-[#ff5f5f]  px-4 py-3 rounded-3xl text-white gap-2 flex select-none cursor-pointer"
		>
			<div>
				<img class="w-10" src="https://storage.ko-fi.com/cdn/cup-border.png" alt="" />
			</div>
			<div>Support me</div>
		</label>
	</div>
	<!-- {#if show}
		<iframe
			class="h-[35rem] rounded-2xl overflow-visible"
			src="https://ko-fi.com/teerut/?hidefeed=true&widget=true&embed=true"
			frameborder="0"
		/>
	{/if}

	 -->
</div>
