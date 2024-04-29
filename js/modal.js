(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  if(!refs.openModalBtn){
    return
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('[data-active]');
  function markActive() {
    setTimeout((function(){
      var currentUrl = window.location.href;
  
      navLinks.forEach(function(link) {
        if(currentUrl.endsWith(link.getAttribute('data-active')) ){
         link.classList.add('active')
    
        }
        else{
        link.classList.remove('active')
        }
      })
    }))
   
  }
 markActive()
 navLinks.forEach(function(link)
{
  link.addEventListener("click",markActive)
})
});
