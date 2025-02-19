// Making of a faulty calculator performing wrong calculations 10% of the times.
let random= Math.random()
console.log(random)
let a= prompt("Enter the first number")
let b= prompt("Enter the second number")
let c= prompt("Enter operation")

let obj= {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1){
    // perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    // perform wrong calculation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}


