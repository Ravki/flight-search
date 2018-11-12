<template>
<div class="home-page">
	<div class="title">Search for the Lowest Fares</div>
	<fs-search-form></fs-search-form>
</div>
</template>
<script>
import fsSearchForm from '../components/fs-search-form/fs-search-form.vue';
export default {
	name: 'home-page',
	components: {fsSearchForm},
	props: {},
	data() {
		return {}
	}
}
</script>
<style scoped>
	.home-page {
		height: 80vh;
		background: url('../../assets/images/flight-search.jpg') center;
		background-size: cover;
		margin-top: 55px;
	}

	.title {
		font-size: 2.5em;
		color: #ffffff;
		margin: 90px 0;
    text-align: center;
    letter-spacing: 1px;
		
	}
</style>

