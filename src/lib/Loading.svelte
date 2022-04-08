<script lang="ts">
	import { loading } from './stores/loading';
</script>

{#if $loading}
	<div class="py-2 px-3 absolute z-50 bg-base-300/80 right-0 left-0 top-0 bottom-0 flex flex-col justify-center items-center">
        <div>loading...</div>
    </div>
{/if}
