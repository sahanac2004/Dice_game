let x = Math.floor((Math.random() * 6) + 1);
      let img1 = document.querySelector(".img1");
      if(x===1)
      img1.src="images/dice1.png";
      if(x===2)
      img1.src="images/dice2.png";
      if(x===3)
      img1.src="images/dice3.png";
      if(x===4)
      img1.src="images/dice4.png";
      if(x===5)
      img1.src="images/dice5.png";
      if(x===6)
      img1.src="images/dice6.png";
 
    let y=Math.floor((Math.random()*6)+1);
    let img2 = document.querySelector(".img2");
    if(y===1)
    img2.src="images/dice1.png";
    if(y===2)
    img2.src="images/dice2.png";
    if(y===3)
    img2.src="images/dice3.png";
    if(y===4)
    img2.src="images/dice4.png";
    if(y===5)
    img2.src="images/dice5.png";
    if(y===6)
    img2.src="images/dice6.png";
    if(x>y){
      document.getElementById("result").innerHTML="Player1 wins";
    }
    else if(x<y){
      document.getElementById("result").innerHTML="Player2 wins";
    }
    else{
      document.getElementById("result").innerHTML="Draw";
    }