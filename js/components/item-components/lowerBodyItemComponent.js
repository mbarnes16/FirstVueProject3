const LowerBodyComponent = Vue.component('LowerBody', {
    props: {
        item: LowerBody,

    },

    methods: {

        deletePanel() {
            this.$emit('delete-item', this.item)
        }

    },

    template: `
      <v-expansion-panel>
      <v-expansion-panel-header>

        <b>{{item.type}}, {{item.totalTime}}</b>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div style="font-size: 14px;"> <b>Workout Summary:</b> {{item.description}}</div>
        <br><br><hr>
        <v-row>
          <v-col cols="10">
            You did {{item.name}} on {{item.date}} for {{item.totalTime}} minutes
          </v-col>
          <v-col cols="2">


            <v-icon v-if="item.wasGood" color="green">mdi-emoticon-happy-outline</v-icon>
            <v-icon v-else-if="item.wasGood === false" color="red">mdi-emoticon-sad-outline</v-icon>


            |
            <v-icon id="removeLowerBody" color="red" @click="deletePanel">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
      </v-expansion-panel>
    `
});