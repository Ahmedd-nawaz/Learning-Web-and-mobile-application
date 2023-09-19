// Color Changing On Mouse Hover
/* var rect = document.querySelector("#center");

  rect.addEventListener("mousemove", function (details) {
    var rectlocation = rect.getBoundingClientRect();
    var insideRectValue = details.clientX - rectlocation.left;

    if (insideRectValue < rectlocation.width / 2) {
        var redColor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insideRectValue);
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    } else {
        var blueColor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, insideRectValue);
        gsap.to(rect,{
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
  });

  rect.addEventListener('mouseleave', function(){
    gsap.to(rect, {
        backgroundColor: "white"
    })
  })
*/

// Left Right Card Moving
/* window.addEventListener('mousemove', function (details) {
    var rect = document.querySelector("#rect")
    var xvalue = gsap.utils.mapRange(0, window.innerWidth, 100 + rect.getBoundingClientRect().width / 2, window.innerWidth - (100 + rect.getBoundingClientRect().width / 2), details.clientX)
    gsap.to('#rect', {
        left: xvalue,
        ease: Power1,
    })
}) */

// Hover effects on div images pop up / Throttling - kisi peticular code k number of execution ko kam kar dena 

const btn = document.querySelector("#center");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
btn.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60")
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y:0,
        ease: Power1,
        duration: .6,
    })
    gsap.to(img,{
        y: "100%",
        ease: Power2,
        delay: .6
    })

    setTimeout(function () {
        div.remove();
    }, 2000);
}, 500));