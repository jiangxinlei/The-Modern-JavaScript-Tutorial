function f() {
  // console.log( this ); // window
}

let user = {
  g: f.bind(null)
};

user.g();

function f1() {
  // console.log(this.name);
}

f2 = f1.bind( {name: "John"} ).bind( {name: "Ann" } );

f2();

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log( bound.test );


function askPassword(ok) {
  ok()
}

let info = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  }

};

askPassword(info.loginOk.bind(info));
askPassword(() => info.loginOk());