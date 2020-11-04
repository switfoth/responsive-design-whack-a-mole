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
      moleHeads[randomNum].classList.toggle('mole-head-hidden')
      setTimeout(()=>hideMole(moleHeads[randomNum]), 1000)
    })

    let hideMole = ((element)=>{
      element.classList.toggle('mole-head-hidden')
      setTimeout(popUpRandomMole, 1000)
    })

    setTimeout(popUpRandomMole, 0)
  });
