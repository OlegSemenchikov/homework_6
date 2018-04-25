document.addEventListener('DOMContentLoaded', function() {
    var mylogotype = document.getElementById("logo");
    var color;

    function getRandomColor() {
        color = "#";
        for (i = 0; i < 6; i++) {
            color += Math.round(Math.random() * 16).toString(16)
        }
        return color;
    }

    function chengeColorLogo() {
        getRandomColor();
        mylogotype.style.background = color;
    }

    mylogotype.addEventListener('mouseover', chengeColorLogo);

    setInterval(chengeColorLogo, 2000);
});


