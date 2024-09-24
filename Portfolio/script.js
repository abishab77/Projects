// For uncheck the checkbox for navbar
function uncheckCheckbox(a) {
    const checkbox = document.getElementById("check");
    checkbox.checked = false;
 
  }
// for removing and adding active class to list item
const listitems=document.querySelectorAll(".list-item");
function activemenu()

{
  
  listitems.forEach((n)=>
  {
    n.classList.remove('active')
  })
  this.classList.add('active')
}

listitems.forEach((n)=>
{
  n.addEventListener("click",activemenu)
})

// Active menu changing according to section
const navItems = document.querySelectorAll(".list-item");


function highlightNavItem() {
  const scrollY = window.scrollY; 

  navItems.forEach(item => {
    const id = item.getAttribute("href");

    const sectionElement = document.querySelector(id);

    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop-100;
      const sectionHeight = sectionElement.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  });
}


window.addEventListener("scroll", highlightNavItem);


highlightNavItem();
