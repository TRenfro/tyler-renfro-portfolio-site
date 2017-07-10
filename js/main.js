AOS.init({
  duration: 900,
})

document.getElementById("nav-toggle").addEventListener("click", toggleNav);
function toggleNav() {
  var nav = document.getElementById("nav-menu");
  var className = nav.getAttribute("class");
  if (className == "nav-right nav-menu") {
    nav.className = "nav-right nav-menu is-active";
  } else {
    nav.className = "nav-right nav-menu";
  }
}


// var emailApiAddress = 'localhost:1337';
// var emailApiAddress = 'RealHostedService';

// var request = new Request(emailApiAddress, {
//   method: 'POST',
// });

// function sendEmail() {
//   console.log('this works!');
//   document.getElementById("contactForm").submit(
//     fetch(request).then(function (res) {
//       console.log(res);
//       return false;
//     })
//   );
// }
