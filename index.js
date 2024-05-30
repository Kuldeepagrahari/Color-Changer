var box = document.querySelector("#box")

;



// box_det will have detail
box.addEventListener("mousemove", function(mouse_det){
//   console.log(box.getBoundingClientRect())
  const recLoc = box.getBoundingClientRect();
// console.log(mouse_det.clientX)
const your_mouse_loc = mouse_det.clientX - recLoc.left;

const left_per = (your_mouse_loc/(recLoc.width/2))

const right_per =  (your_mouse_loc/(recLoc.width));

  if ( your_mouse_loc < recLoc.width/2 && your_mouse_loc >= 0){
    // console.log(left_per)
    const red = 255*(1-left_per)
    box.style.backgroundColor=`rgb(${red},0,0)`
    // console.log( box.style.backgroundColor)
    
  }
  else if ( your_mouse_loc > recLoc.width/2 && your_mouse_loc <= recLoc.width) {
    console.log(100-right_per)
    const blue = 255*right_per
    box.style.backgroundColor=`rgb(0,0,${blue})`
}
console.log(your_mouse_loc)
})

box.addEventListener("mouseleave",function(){
  box.style.backgroundColor = "rgb(119, 168, 223)"
})