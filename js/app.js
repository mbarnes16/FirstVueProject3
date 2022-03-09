Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#2196F3'
                }
            }
        }
    }),
    data: {


        ItemList: new WorkoutCollection()
            .addItem(new Workout('Upper Body','Overhead Presses','Presses weight overhead while seated or standing','02/28/2022',10))
            .addItem(new Workout('Lower Body', 'Lunges','stepping and bending your front and back leg', '02/28/2022', 10))
            .addItem(new Workout('Cardio','Treadmill','Walking on treadmill','02/28/2-22', 10)),


    },

    methods: {
        addItem(newItem) {
            this.ItemList.addItem(newItem);

        },


        removeItem(item){
            this.ItemList.splice(this.ItemList.indexOf(item), 1);
        },

        // determineType(item) {
        //     let upperBody = new UpperBody;
        //     if (item.type.toString() === "isUpperBody") {
        //         upperBody = item;
        //     } else if (item.type.toString() === "isLowerBody") {
        //
        //     } else if (item.type.toString() === "isCardio") {
        //
        //     }
        // }

    },

    computed: {
    },


});