const sayHello = (name,hour)=>{
    if(hour >= 18) {
        //console.log(`Bonsoir ${name}!`)
        document.querySelector('h1').innerText=(`Bonsoir ${name}!`)
    } else {
        //console.log(`Bonjour ${name}!`)
        document.querySelector('h1').innerText=(`Bonjour ${name}!`);
    } 
};
//let message = 'Bonjour!';
//console.log(message);
//let firstname = "Beyonce";
//message = `Bonjour ${firstname}!`;
//console.log(message);
let userName = prompt("Comment t'appelles tu?");
sayHello(userName,13);
//sayHello('Beyonce',22);
