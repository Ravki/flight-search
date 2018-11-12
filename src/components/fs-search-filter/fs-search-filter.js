import VueSlideBar from 'vue-slide-bar';
export default {
    name: 'fs-search-filter',
    props: {},
    components: { VueSlideBar },
    data() {
        return {
            slider: {
                data: [
                    2000,
                    4000,
                    6000,
                    8000,
                    10000,
                    12000,
                    14000,
                    16000,
                    18000,
                    20000
                ],
                range: [{
                        label: '2k'
                    },
                    {
                        label: '4k'
                    },
                    {
                        label: '6k'

                    },
                    {
                        label: '8k'
                    },
                    {
                        label: '10k'
                    },
                    {
                        label: '12k'
                    },
                    {
                        label: '14k'
                    },
                    {
                        label: '16k'
                    },
                    {
                        label: '18k'
                    },
                    {
                        label: '20k'
                    }
                ]
            },
            selectedPrice: '',
            sliderValue: 20000
        }
    },
    created() {
        this.$root.$on('onSearchClick', data => {
            this.sliderValue = 20000;
        });
    },
    methods: {
        callbackRange: function(val) {
            this.selectedPrice = val;
        }
    },
    watch: {
        sliderValue: function(newValue, oldValue) {
            this.$root.$emit('onSliderChange', newValue);
        }
    }
}