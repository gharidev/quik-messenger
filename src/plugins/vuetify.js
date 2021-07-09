import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.blue.base,
                secondary: colors.teal.base,
                accent: colors.indigo.base,
                error: '#ff0000'
            },
        },
    },
});
