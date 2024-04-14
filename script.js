//  about remove img in 518px
function myFunction(z) {
    var img= document.querySelector('.about-img')
    if (z.matches) { 
      img.style.display='none'
    } else {
        img.style.display='block'
    }
  }
  
  var z = window.matchMedia("(max-width: 518px)")
  myFunction(z) // Call listener function at run time
  z.addListener(myFunction) // Attach listener function on state changes

  //  removing review img in 768px
function reviewimage(x) {
  var reviewimg= document.querySelector('.review-img')
  if (x.matches) { 
    reviewimg.style.display='none'
  } else {
      reviewimg.style.display='block'
  }
}

var x= window.matchMedia("(max-width: 768px)")
reviewimage(x) // Call listener function at run time
x.addListener(reviewimage) // Attach listener function on state changes

  //  counsil card img in 500px
  function counsilimg(y) {
    var cardimg= document.querySelectorAll('.counsil-img')
    for(i=0;i<3; i++){
      if(y.matches){
        cardimg[i].style.display='none';
      }else{
        cardimg[i].style.display='block';
      }
    }
  }
  
  var y = window.matchMedia("(max-width: 500px)")
  counsilimg(y) // Call listener function at run time
  y.addListener(counsilimg) // Attach listener function on state changes
