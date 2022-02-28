Vue.component('AddLowerBodyWorkoutForm', {

    props: {
        item: {
            type: Object,
            required: true,
        },
    },


    methods: {

        addLowerBodyWorkout() {
            this.$emit('add-item', this.item)
        }

    },

    template:
        `
     <div class="lowerBodyWorkoutForm">
      <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            
            <v-text-field

                label="Workout Name"
                v-model="item.name"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="9">
            <v-text-field
                label="Summary"
                v-model="item.description"
                outlined
            ></v-text-field>
          </v-col>

        </v-row>

        <v-row>

          <v-col cols="12" sm="3">
            <v-text-field
                label="Date of Workout"
                v-model="item.date"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="9">
            <v-text-field
                label="Duration"
                v-model="item.totalTime"
                outlined
            ></v-text-field>
          </v-col>

        </v-row>
        
        
        <v-radio-group
            v-model="item.wasGood"
            row
        >
          <v-radio
              label="Good Workout"
              v-bind:value="true"
          ></v-radio>
          
          <v-radio
              label="Bad Workout"
              v-bind:value="false"

          ></v-radio>

        </v-radio-group>
        
          <submit-btn
              button-text="Add Workout"
              @submit-Form="addLowerBodyWorkout"
          >
          </submit-btn>

      </v-container>
      </v-form>
     </div>
    `
});