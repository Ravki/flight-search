<template>
<div class="results-page">
	<div>
		<fs-mini-search-box></fs-mini-search-box>
	</div>
	<div>
		<fs-results-box></fs-results-box>
	</div>
</div>
</template>
<script>
import fsMiniSearchBox from '../components/fs-mini-search-box/fs-mini-search-box.vue';
import fsResultsBox from '../components/fs-results-box/fs-results-box.vue';
export default {
	name: 'results-page',
	components: {fsMiniSearchBox, fsResultsBox},
	props: {},
	data() {
		return {}
	}
}
</script>
<style scoped>
	.results-page {
		display: flex;
		flex-direction: column;
		background: #e7e9ec;
		margin-top: 50px;
		min-height: 80vh;

	}
</style>

