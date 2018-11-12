import fsMockData from '../../data/mock-data.js';
export default {
    name: 'fs-search-results',
    data() {
        return {
            results: {},
            searchResults: {}
        }
    },
    created() {
        this.$root.$on('onSliderChange', data => {
            this.filterResults(data);
        });
        this.$root.$on('onSearchClick', data => {
            this.constructSearchResults(data);
        });
    },
    computed: {
        showFromResults() {
            return this.results.from && this.results.from.length;
        },
        showToResults() {
            return this.results.to && this.results.to.length;
        }
    },
    methods: {
        constructSearchResults: function(query) {
            this.searchResults = {};
            this.searchResults.from = fsMockData.searchResults.filter(function(entry) {
                return (entry.details.travel.departureCity === query.from && entry.details.travel.arrivalCity === query.to);
            });
            if (!query.isOneWay) {
                this.searchResults.to = fsMockData.searchResults.filter(function(entry) {
                    return (entry.details.travel.departureCity === query.to && entry.details.travel.arrivalCity === query.from);
                });
            }
            this.results = this.searchResults;
        },
        filterResults: function(price) {
            var filteredResults = {};
            if (!this.$store.getters.isOneWay) {
                price = price / 2;
                filteredResults.to = this.searchResults.to.filter(function(entry) {
                    return entry.fare <= price;
                });
            }
            filteredResults.from = this.searchResults.from.filter(function(entry) {
                return entry.fare <= price;
            });
            this.results = filteredResults;
        }
    }
}