const app = document.getElementById("app");
const btnNama = document.getElementById("btn");
const input = document.getElementById("input");
const image = document.getElementById("image");

const generateHewan = () => {
    let result = input.value.toUpperCase();
    if (result == "BURUNG") {
        image.src =
        "./img/burung";
    } else if (result == "KUCING") {
        image.src = 
        "./img/kucing.jpg";
    } else if (result == "HARIMAU") {
        image.src =
        "./img/harimau.jpg";
    } else {
        image.src =
        "./img/manusia.jpg";
    }
};