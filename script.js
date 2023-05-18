//Saglabā to checkboxu JS mainīgajā
const toggleTheme = document.getElementById("toggle-theme");


toggleTheme.addEventListener("change", toggleThemeHandler );

function toggleThemeHandler () {
if (toggleTheme.checked){
    html.dataset.theme = "dark";
    localStorage.setItem('theme', "dark");
} else {
    html.dataset.theme = "light";
    localStorage.setItem('theme', "light");
}
}
const theme = localStorage.getItem("theme");

if (theme == 'light'|| !theme){
    html.dataset.theme = "light";
}
else {
    html.dataset.theme = "dark";
    document.getElementById("toggle-theme").checked = true;
}

// ..........12.05.2023................

const toggleButton = document.getElementById("toggle-menu");
toggleButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    const menu = document.querySelector("ul");
    menu.classList.toggle("show");
  }
// ..........18.05.2023................

  const toggle = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

toggle.addEventListener('click', function() {
  if (toggle.checked) {
    themeIcon.src = 'lightmode.png'; // icona uz lightmode
  } else {
    themeIcon.src = "darkmode.png"; // ikona uz darkmode
  }
});


function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const resultElement = document.getElementById('result');
    
    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      
      if (selectedValue === "a", "c", "d") {
        resultElement.textContent = 'Pareizi!';
        resultElement.style.color = 'green';
      } else {
        resultElement.textContent = 'Nepareizi!';
        resultElement.style.color = 'red';
      }
    } else {
      resultElement.textContent = 'Lūdzu, izvēlieties atbildi.';
      resultElement.style.color = 'red';
    }
  }
// ------------------------------------------------------
  const aus = document.getElementById("check1");
  const rome = document.getElementById("check2");
  const indo = document.getElementById("check3");
  const liep = document.getElementById("check4");
  
  function getValue() {
    var result = 0;
    if (aus.checked == true) {
      result = result + 1;
    }
    if (indo.checked == true) {
      result = result + 1;
    }
    if (liep.checked == true) {
      result = result + 1;
    }
    if (rome.checked == true) {
      result = "Ne jau Roma!";
    }
    if (rome.checked != true) {
      document.getElementById("1").innerHTML =
        "Pareizi izvelejies " + result + " no 3";
    } else {
      document.getElementById("1").innerHTML = result;
    }
  }



 