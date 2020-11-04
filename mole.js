// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

    // setInterval(() => {
    //   const moleHeads = document.querySelectorAll('.mole-head');
    //   for (let moleHead of moleHeads) {
    //     moleHead.classList.toggle('mole-head-hidden');
    //   }
    // }, 1000);

    let popUpRandomMole = (() =>{
      let moleHeads = document.querySelectorAll("img.mole-head");
      let randomNum = Math.floor(Math.random()*7)
      if(!moleHeads[randomNum].classList.contains('whacked')){
        moleHeads[randomNum].classList.toggle('mole-head-hidden')
        setTimeout(()=>hideMole(moleHeads[randomNum]), 3000)
      } else{
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

    let moleHeads = document.querySelectorAll("img.mole-head");
    moleHeads.forEach(function(moleHead){
        moleHead.addEventListener('click', () => {
            moleHead.classList.toggle('mole-head-hidden');
            moleHead.classList.add('whacked');
        });
    });
  });
