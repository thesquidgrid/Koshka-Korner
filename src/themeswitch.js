

// load theme setting from localstorage
const savedTheme = localStorage.getItem('theme');
// get style-setting element on page
const themeElement = document.getElementsByTagName('link')[0];

// set CSS value based on what was loaded from localstorage
if (savedTheme === "blue") {
  themeElement.setAttribute('href', '/_site/assets/styles/themes/light-theme.css');
} else {
  themeElement.setAttribute('href', '/_site/assets/styles/themes/dark-theme.css');
}


function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];
  
    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == '/_site/assets/styles/themes/contrast.css') {
         theme.setAttribute('href', '/_site/assets/styles/themes/light-theme.css'); localStorage.setItem('theme', 'blue');
     } else {
        theme.setAttribute('href', '/_site/assets/styles/themes/contrast.css'); localStorage.setItem('theme', 'green');
        }
 }
