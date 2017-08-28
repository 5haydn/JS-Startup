var name = 'xiaoming';
var person1 = {
    name:'xiaoming'
}

var person2 = {
    'name':'xiaoming'
}

var person3 = {
    name
}

console.log(typeof(person1));
console.log(typeof(person2));
console.log(typeof(person3));

console.log(person1.name);
console.log(person2.name);
console.log(person3.name + '\n');

console.log(person1['name']);
console.log(person2['name']);
console.log(person3['name']);
