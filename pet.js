class Pet {
  constructor(animal, age, breed,sound){
    this.animal = animal;
    this.age    = age;
    this.breed  = breed;
    this.sound  = sound;
  }
  
  get activity(){
    const today = new Date();
    const hours = today.getHours();
}
  
  speak(){
  console.log(this.sound);
  }
  
}
/*
const ernie = new Pet('dog',1,'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

console.log(ernie);

vera.speak();
*/