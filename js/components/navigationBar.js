Vue.component('NavigationBar', {
    props: {
        title: {
            type: String,
            default: 'Header - Main Title',
        },
        subHeader: {
            type: String,
            default: 'Sub-Title',
        },
        link: {

        },
    },

    template: `
      <v-toolbar
          color="blue"
          dark
      >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-divider
          class="mx-4"
          vertical
      ></v-divider>

      <span class="subheading">{{ subHeader }}</span>

      <v-spacer></v-spacer>
      
      </v-toolbar>
    `

});