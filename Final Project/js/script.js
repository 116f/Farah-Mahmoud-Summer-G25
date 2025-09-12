$(document).ready(function(){

  // Owl Carousel Products
  $(".products-carousel").owlCarousel({
    items:5,
    loop:true,
    nav:true,
    navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
  });

  // Owl Carousel Logos
  $(".logos-carousel").owlCarousel({
    items:5,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
  });

  // AOS Animation
  AOS.init({
    duration: 1200,   
    once: true       
  });

  // Tooltip Function
  function initTooltips() {
   
    $('[data-bs-toggle="tooltip"]').tooltip('dispose');


    $('[data-bs-toggle="tooltip"]').tooltip({
      placement: 'left',   
      trigger: 'hover'     
    });
  }


  initTooltips();


  $('.owl-carousel').on('translated.owl.carousel', function () {
    initTooltips();
  });

});


if (document.getElementById('contactForm')) {
    var contactForm = document.getElementById('contactForm');


    contactForm.addEventListener('input', (e) => {
        if (e.target.id == "userFirstName") {
            nameValidation(e.target);
        }
        else if (e.target.id == "userEmail") {
            emailValidation(e.target);
        }
        else if (e.target.id == "userSubject") {
            subjectValidation(e.target);
        }
    });

 
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        let isValid = true;

        nameValidation(document.getElementById('userFirstName'));
        emailValidation(document.getElementById('userEmail'));
        subjectValidation(document.getElementById('userSubject'));

        document.querySelectorAll("#contactForm .error").forEach(span => {
            if (span.innerText !== "") isValid = false;
        });

        let msgBox = document.getElementById("formError");

        if (!isValid) {
            msgBox.classList.remove("d-none");
            msgBox.innerText = "One or more fields have an error. Please check and try again.";
        } else {
            msgBox.classList.remove("d-none");
            msgBox.innerText = "Thank you for your message. It has been sent.";
            contactForm.reset();
        }
    });
}

var nameValidation = (element) => {
    var regex = /^[A-Za-z\s]{3,20}$/;
    if (!regex.test(element.value.trim())) {
        handleError(element, "Name must be 3-20 letters only");
    } else {
        handleError(element);
    }
}

var emailValidation = (input) => {
    var emailRegex = /^[a-zA-Z0-9._%+-]{3,15}@[a-zA-Z0-9.-]{3,10}\.[A-Za-z]{2,5}$/;
    if (!emailRegex.test(input.value.trim())) {
        handleError(input, "Please enter a valid email");
    } else {
        handleError(input);
    }
}

var subjectValidation = (input) => {
    var val = input.value.trim();
    if (val.length < 3) {
        handleError(input, "Subject must be at least 3 characters");
    } else {
        handleError(input);
    }
}


var handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg;
}



window.addEventListener('scroll' , ()=>{
    var upArrow = document.getElementById('upArrow')
    console.log('scrolling')
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 400) upArrow.classList.remove('d-none')
        else upArrow.classList.add('d-none')
})




