import DatePicker from 'vue2-datepicker';
import Autocomplete from 'vuejs-auto-complete';
//import fecha from 'fecha';
import router from '../../router.js';

export default {
    name: 'fs-search-form',
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
            flexDirect: this.direction,
            airports: [{ id: 1, name: 'Agra' }, { id: 2, name: 'Bhubaneshwar' }, { id: 3, name: 'Chennai' }, { id: 4, name: 'Delhi' }, { id: 5, name: 'Gurgaon' }, { id: 6, name: 'Hyderabad' }, { id: 7, name: 'Kochi' }, { id: 8, name: 'Lucknow' }, { id: 9, name: 'Mumbai' }, { id: 10, name: 'Noida' }],
        };
    },
    methods: {
        tabClick: function(isOneWay) {
            this.isOneWay = isOneWay;
            this.$store.commit('isOneWay', this.isOneWay);
        },
        search: function() {
            router.push({ name: 'results' });
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
        oneWaydate: function() {
            var time = this.selectedToDate;
            this.$store.commit('changeDate', time);
        },
        twoWayDates: function() {
            var time = [];
            time.push(this.selectedReturnDate[0]);
            time.push(this.selectedReturnDate[1]);
            this.$store.commit('changeDate', time);
        },
        countChange: function() {
            this.$store.commit('changePassengerCount', this.passengersCount);
        }
    },
    // computed: {
    //     styleFlex: function() {
    //         if (this.forResults) {
    //             this.flexDirect = 'column';
    //         }
    //     }
    // }
};