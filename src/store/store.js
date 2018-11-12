import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // state of the components
    state: {
        isOneWay: true,
        from: '',
        to: '',
        date: '',
        noOfPassengers: 0
    },
    mutations: {
        isOneWay(state, isOneWay) {
            state.isOneWay = isOneWay;
        },
        changeFrom(state, from) {
            state.from = from;
        },
        changeTo(state, to) {
            state.to = to;
        },
        changeDate(state, date) {
            state.date = date;
        },
        changePassengerCount(state, count) {
            state.noOfPassengers = count;
        }
    },
    getters: {
        isOneWay: state => state.isOneWay,
        fromCity: state => state.from,
        toCity: state => state.to,
        traveldate: state => state.date,
        passengerCount: state => state.noOfPassengers
    }
});

export default store;