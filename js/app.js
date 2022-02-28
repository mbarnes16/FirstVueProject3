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
            .addItem(new UpperBody('Upper Body','Overhead Presses','Presses weight overhead while seated or standing','02/28/2022',10))
            .addItem(new LowerBody('Lower Body', 'Lunges','stepping and bending your front and back leg', '02/28/2022', 10))
            .addItem(new CardioWorkout('Cardio','Treadmill','Walking on treadmill','02/28/2-22', 10)),

        item: new UpperBody,

    },

    methods: {
        addItem() {
            this.ItemList.addItem(this.item);



            this.item = new UpperBody;

        },


        removeItem(item){
            this.ItemList.splice(this.ItemList.indexOf(item), 1);
        },

    },

    computed: {
    },


});