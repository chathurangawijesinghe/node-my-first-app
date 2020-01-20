/* const person = {
    name: "ch",
    age: 10,
    greet() {
        console.log("Hi, I'm", this.name);
    }
};

person.greet();

const hobbies = ["test1", "test2"];
hobbies.push("test3"); */

const fetchData = callback => {
    const promise = new Promise((resole, reject) => {

    });

  setTimeout(() => {
      callback('Done!');
  }, 1500);  
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);
