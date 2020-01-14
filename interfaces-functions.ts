interface Person {
  name: string;
  city: string;
  age: number;
  printDetails(): string;
  printAge(year: number): number;
}

const tom: Person = {
  name: "Tom",
  city: "Munich",
  age: 40,
  printDetails: function() {
    return `${this.name} - ${this.city}`;
  },
  printAge: function(year) {
    return year - this.age;
  }
};

console.log(tom.printAge(2020));
console.log(tom.printDetails());
