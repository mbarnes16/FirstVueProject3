function WorkoutCollection(){

    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new ListItem(item));

        return this;
    }

}


function ListItem(item){

    return item;

}
function UpperBody(type, name, description, date, totalTime, wasGood){
    this.type = type || "UpperBody";
    this.name = name;
    this.description = description;
    this.date = date;
    this.totalTime = totalTime;
    this.wasGood = wasGood;
}
function LowerBody(type, name, description, date, totalTime, wasGood){
    this.type = type || "LowerBody";
    this.name = name;
    this.description = description;
    this.date = date;
    this.totalTime = totalTime;
    this.wasGood = wasGood;
}
function CardioWorkout(type, name, description, date, totalTime, wasGood){
    this.type = type || "CardioWorkout";
    this.name = name;
    this.description = description;
    this.date = date;
    this.totalTime = totalTime;
    this.wasGood = wasGood;
}
function Workout(type, name, description, date, totalTime, wasGood) {
    this.type = type || "Workout" || "LowerBody" || "UpperBody" || "CardioWorkout";
    this.name = name;
    this.description = description;
    this.date = date;
    this.totalTime = totalTime;
    this.wasGood = wasGood;
}