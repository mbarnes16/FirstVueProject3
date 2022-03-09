Vue.component('workoutForm', {
    props: {},
    data() {
        return {item: new Workout()}
    },


    methods: {

        addWorkout() {
            this.$emit('add-item', this.item)
        }

    },

    template:
        `
          <div class="workoutForm">
          <v-form>
            <v-container>
              <v-radio-group
                  v-model="item.type"
                  row
              >
                <v-radio
                    label="Upper Body"
                    value="Upper Body"
                ></v-radio>

                <v-radio
                    label="Lower Body"
                    value="Lower Body"

                ></v-radio>
                <v-radio
                    label="Cardio"
                    value="Cardio"

                ></v-radio>

              </v-radio-group>
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

              <custom-btn
                  button-text="Add Workout"
                  @submit-Form="addWorkout"
              >
              </custom-btn>

            </v-container>
          </v-form>
          </div>
        `
});