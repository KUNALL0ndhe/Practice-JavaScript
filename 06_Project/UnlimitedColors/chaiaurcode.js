const randomColors = () => {
    let hex = '0123456789ABCDEF'; //0
    let colors = '#';
  
    for (i = 0; i<6 ; i++) {
      colors += hex[parseInt(Math.random() * 16 )]
      
    };
    console.log(colors)
    return colors;
  };
  
  let setUp;
  
  document.querySelector('#start').addEventListener('click',() => {
    if (!setUp)
    {setUp = setInterval(startChangeColor, 100)}
  });
  
  let startChangeColor = () => {
    document.body.style.backgroundColor = randomColors()
  };
  
  let stopChangeColor = () => {
    clearInterval(setUp);
    setUp = null;
  };
  
  console.log(setUp)
  
  document.querySelector('#stop').addEventListener('click',() => {
    stopChangeColor();
  })
  
  
  
  
  