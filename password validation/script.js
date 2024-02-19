let is_visible = false;

function see() {
    const input = document.getElementById("password");

    if (is_visible) {
        input.type = "password";
        is_visible = false;
        document.getElementById("see").style.color = "gray";
    } else {
        input.type = "text";
        is_visible = true;
        document.getElementById("see").style.color = "red";
    }
}
function check() {
    const input = document.getElementById("password").value;
    // const input = input.value;
    // const input = input.trim();
    
    document.getElementById("count").innerText = input.length;

    if (is_visible) {
        input.type = "password";
        is_visible = false;
        document.getElementById("see").style.color = "gray";
    } else {
        input.type = "text";
        is_visible = true;
        document.getElementById("see").style.color = "red";
    }

    if (input.length >= 5) {
        document.getElementById("circle0").style.color = "green";
    } else {
        document.getElementById("circle0").style.color = "red";
    }

    if (input.length <= 10) {
        document.getElementById("circle1").style.color = "green";
    } else {
        document.getElementById("circle1").style.color = "red";
    }

    if (input.match(/\d/)) {
        document.getElementById("circle2").style.color = "green";
    } else {
        document.getElementById("circle2").style.color = "red";
    }

    if (input.match(/[^A-Za-z0-9-'']/i)) {
        document.getElementById("circle3").style.color = "green";
    } else {
        document.getElementById("circle3").style.color = "red";
    }

    if (input.includes(" ")) {
        document.getElementById("circle4").style.color = "green";
    } else {
        document.getElementById("circle4").style.color = "red";
    }
}

