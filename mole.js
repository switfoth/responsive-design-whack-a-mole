// Write your JS here.
window.addEventListener('DOMContentLoaded', () => {

    setInterval(() => {
      const moleHeads = document.querySelectorAll('.mole-head');
      for (let moleHead of moleHeads) {
        moleHead.classList.toggle('mole-head-hidden');
      }
    }, 1000);

  });
