import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blueGrey.darken4,
                secondary: colors.teal.darken4,
                accent: colors.indigo.base,
                error: '#ff0000'
            },
        },
    },
});
