# Project One 
## Color Change
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-vabfxu?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

```
code:

let buttons = document.body.querySelectorAll('.button');
let body = document.body.querySelector('.body');

buttons.forEach( (button) => {
  console.log(button.id);
  button.addEventListener('click', ( (e) => {
    console.log(e.target.id)

    const value = e.target.id

    switch (button.id ) {
      case value:
        document.body.style.backgroundColor = value;
        break;
        default:
          console.log("no Color")
    }
  }))
      
}
);



```