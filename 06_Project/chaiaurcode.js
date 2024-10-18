let form = document.querySelector("form");

form.addEventListener( "submit" , (e) => {
e.preventDefault();

let height = parseInt(document.querySelector("#height").value);
let weight = parseInt(document.querySelector("#weight").value);
let result = document.querySelector("#results");
const bmi = (weight / ((height * height) / 10000)).toFixed(2);

if (height == '' || height < 0 || isNaN(height)) {
  result.innerHTML = `Please Enter valid Height ${height}`;
} else if (weight == '' || weight < 0 || isNaN(weight)) {
  result.innerHTML = `Please Enter valid Weight ${weight}`;
}
else{
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;  
}
    let below = document.querySelector('#below')
    let normal  = document.querySelector('#normal');
    let over = document.querySelector("#over");

    if (bmi < 18.5)  {
      result.innerHTML = `Your bmi is ${bmi} you are Below Weight.`
      over.innerHTML = "You are Below Weight";
      over.style.backgroundColor = "orange";
      normal.innerHTML = '';
      below.innerHTML = '';
    } else if (18.6 <= bmi && bmi <= 24.8 ) {
      result.innerHTML = `Your bmi is ${bmi} you are Normal Weight.`
      normal.innerHTML = "You are normal Weight";
      normal.style.backgroundColor = "green";
      below.innerHTML = '';
      over.innerHTML = '';
    } else if (bmi > 24.9 ) {
      result.innerHTML = `Your bmi is ${bmi} you are over Weight.`
      below.innerHTML = "You are over Weight";
      below.style.backgroundColor = "yellow";
      normal.innerHTML = '';
      over.innerHTML = '';
    }
   

});


