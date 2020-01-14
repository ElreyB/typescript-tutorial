interface Person {
  name: string;
  city: string;
  age: number;
  printDetails(): string;
  getAge(year: number): number;
}

const tom: Person = {
  name: "Tom",
  city: "Munich",
  age: 40,
  printDetails: function() {
    return `${this.name} - ${this.city}`;
  },
  getAge: function(year) {
    return year - this.age;
  }
};

console.log(tom.getAge(2020));
