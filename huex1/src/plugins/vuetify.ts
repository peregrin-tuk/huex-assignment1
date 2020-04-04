import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#009688',
            secondary: '#00bcd4',
            accent: '#f44336',
            error: '#cddc39',
            warning: '#ffeb3b',
            info: '#607d8b',
            success: '#8bc34a'
          },
        },
        options: {
          customProperties: true,
        },
    }
});
