const boxSp = document.getElementById('box-sticky')

const list =document.getElementById('list')






window.addEventListener("scroll", function() {
    const boxSticky = document.getElementById('box-sp-sticky')
    var scrollPosition = window.scrollY;
   
    if (scrollPosition > 800) {
        boxSp.classList.add('hidden')
        boxSticky.classList.remove("hidden");
        list.classList.remove('hidden')
    } else {
      boxSticky.classList.add("hidden");
      list.classList.add('hidden')
      boxSp.classList.remove('hidden')
    }
  });
  

  