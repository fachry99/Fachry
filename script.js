function scrollToElement(elementSelector, intance = 0) {
    //select all elements that match given selector
    const element = document.querySelectorAll(elementSelector);
    //check if there is any element that matches the selector
    if (element.length > 0) {
        //scroll to the element
        element[intance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1= document.getElementById('link1');
const link2= document.getElementById('link2');
const link3= document.getElementById('link3');

link1.addEventListener('click', () => { 
    scrollToElement('.header',0);
});

link2.addEventListener('click', () => { 
    //scroll to the second element that matches the selector
    scrollToElement('.header',1);
});

link3.addEventListener('click', () => {
    //scroll to the third element that matches the selector
    scrollToElement('.header',2);
});

  function toggleProject(button) {
    const card = button.closest(".card_project");
    const moreContent = card.querySelector(".project-more");

    if (moreContent.style.display === "block") {
      moreContent.style.display = "none";
      button.textContent = "See more";
    } else {
      moreContent.style.display = "block";
      button.textContent = "See less";
    }
  }


