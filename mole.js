// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

    let moleHeadsNode = document.querySelectorAll("img.mole-head");
    let moleHeads = Array.prototype.slice.call(moleHeadsNode);

    let popUpRandomMole = (() =>{
      if(moleHeads.length === 0) return console.log("You win!")
      let randomNum = Math.floor(Math.random()*(moleHeads.length-1))
      if(!moleHeads[randomNum].classList.contains('whacked')){
        moleHeads[randomNum].classList.toggle('mole-head-hidden')
        setTimeout(()=>hideMole(moleHeads[randomNum]), 3000);
      } else{
        moleHeads.splice(randomNum, 1);
        popUpRandomMole();
      }
    })

    let hideMole = ((element)=>{
      if(!element.classList.contains('mole-head-hidden')){
        element.classList.toggle('mole-head-hidden')
      }
      setTimeout(popUpRandomMole, 1000)
    })

    setTimeout(popUpRandomMole, 0)

    moleHeads.forEach(function(moleHead){
        moleHead.addEventListener('click', () => {
            moleHead.classList.toggle('mole-head-hidden');
            moleHead.classList.add('whacked');
        });
    });
  });
