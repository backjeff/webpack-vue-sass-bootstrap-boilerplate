import Vue from 'vue';
import moment from 'moment';

moment.updateLocale(moment.locale(), { invalidDate: "---" });

Vue.filter("numberFormat", x => Number(x).toLocaleString('pt-BR'));
Vue.filter("dateFormat", x => moment(x).format('DD/MM/YYYY'));
Vue.filter("timeFormat", x => moment(x).format('HH:mm'));
Vue.filter("timeDateFormat", x => moment(x).format('HH:mm DD/MM/YYYY'));
Vue.filter("dateTimeFormat", x => moment(x).format('DD/MM/YYYY HH:mm'));