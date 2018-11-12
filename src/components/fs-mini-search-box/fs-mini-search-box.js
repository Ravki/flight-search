import DatePicker from 'vue2-datepicker';
import Autocomplete from 'vuejs-auto-complete';

export default {
    name: 'fs-mini-search-box',
    components: {
        DatePicker,
        Autocomplete
    },
    props: {
        direction: String
    },
    data() {
        return {
            lang: {
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                pickers: null,
                placeholder: {
                    date: 'Depart',
                    dateRange: 'Depart - Return'
                }
            },
            selectedToDate: '',
            selectedReturnDate: '',
            isOneWay: true,
            isDateEditable: false,
            isDateRange: true,
            isDateShortcuts: false,
            passengersCount: Number,
            sourceCity: '',
            destinationCity: '',
            selectedDate: '',
            selectedPasengerCount: 0,
            flexDirect: this.direction,
            airports: [{ id: 1, name: 'Agra' }, { id: 2, name: 'Bhubaneshwar' }, { id: 3, name: 'Chennai' }, { id: 4, name: 'Delhi' }, { id: 5, name: 'Gurgaon' }, { id: 6, name: 'Hyderabad' }, { id: 7, name: 'Kochi' }, { id: 8, name: 'Lucknow' }, { id: 9, name: 'Mumbai' }, { id: 10, name: 'Noida' }],
        }
    },
    mounted() {
        this.setSearchFormValues();
    },
    methods: {
        setSearchFormValues: function() {
            this.selectedDate = this.$store.getters.traveldate;
            this.selectedPasengerCount = this.$store.getters.passengerCount;
            this.isOneWay = this.$store.getters.isOneWay;
            this.$root.$emit('onSearchClick', { from: this.$store.getters.fromCity, to: this.$store.getters.toCity, isOneWay: this.isOneWay });
        },
        tabClick: function(isOneWay) {
            this.isOneWay = isOneWay;
            this.$store.commit('isOneWay', this.isOneWay);
        },
        search: function() {
            this.$root.$emit('onSearchClick', { from: this.$store.getters.fromCity, to: this.$store.getters.toCity, isOneWay: this.isOneWay });
        },
        getTodaysDate: function() {
            return new Date();
        },
        fromDestination: function(option) {
            var value;
            if (option) {
                value = option.display;
            } else {
                value = '';
            }
            this.$store.commit('changeFrom', value);
        },
        toDestination: function(option) {
            var value;
            if (option) {
                value = option.display;
            } else {
                value = '';
            }
            this.$store.commit('changeTo', value);
        },
    },
    computed: {
        selectedOrigin: function() {
            return this.$store.getters.fromCity;
        },
        selectedDestination: function() {
            return this.$store.getters.toCity;
        }
    }
};