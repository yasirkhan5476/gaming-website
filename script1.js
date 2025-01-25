// 
document.addEventListener("DOMContentLoaded", function() {
  let menu = document.querySelector('.menu-icon');
  let navbar = document.querySelector('.menu');
  let bell = document.querySelector('.notification');

  menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('active');
    bell.classList.remove('active');
  };

  document.querySelector('.bellicon').onclick = () => {
    bell.classList.toggle('active');
  };

  var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
         delay: 3000,
         disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});

function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the email and password match the credentials for access
  if (email === 'admin' && password === 'admin') {
      // Redirect to another page (replace "target_page_url" with the desired URL)
      window.location.href = '/game1.html';
  } else {
      alert('Invalid credentials. Please try again.');
  }
}


const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit',handleLogin);

// credit



// function navigateToInstallPage() {
//   const payment = document.getElementById("payment").value;
//   const cardNo = document.getElementById("cardno").value;
//   const validTill = document.getElementById("validtill").value;
//   const cvv = document.getElementById("cvv").value;
//   const agreeCheckbox = document.getElementById("checkbox").checked;

//   // if (payment != '\0' && cardNo != '\0' && validTill != '\0' && cvv != '\0' && agreeCheckbox == true) {
//     if (payment !== '' || cardNo !== '' || validTill !== '' || cvv !== '' || agreeCheckbox === true) {
//     window.location.href = "/installpage.html";
//   } else {
//     alert("Please fill all the required fields correctly.");
//   }
//  }
function navigateToInstallPage(event) {
  event.preventDefault(); // Prevent the default form submission

  const payment = document.getElementById("payment").value;
  const cardNo = document.getElementById("cardno").value;
  const validTill = document.getElementById("validtill").value;
  const cvv = document.getElementById("cvv").value;
  const agreeCheckbox = document.getElementById("checkbox").checked;


  if (payment === '' && cardNo === '' && validTill === '' && cvv === '' && !agreeCheckbox) {
    window.location.href = "/installpage.html";
  } else {
      alert("Please fill all the required fields correctly.");
  }
}









   
   
    
    
    
    
    
    
    
   
   




