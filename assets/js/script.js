"use strict";
let session = 0
document.addEventListener('DOMContentLoaded', init)

function init() {

    console.log('content loaded');
    document.querySelectorAll('.menu a').forEach(button => button.addEventListener('click', handleNavigation));

}

function handleNavigation(e) {

    e.preventDefault()

    document.querySelectorAll('.menu a').forEach(button => button.classList.remove('toggled'));

    e.target.classList.add('toggled')

    session++
    document.getElementById("generatedText").innerHTML = '';

    let txt = ""
    if (e.target.dataset.name === "about") {
        txt = "Hi there! I am appelsiensam, an 19 years old guy born in Belgium who loves to code and is higly interested in everything that has to do with technology. :^)"
    } else if (e.target.dataset.name === "projects") {
        txt = "projects comming soon"
    } else {
        txt = "socials comming soon"

    }
    console.log(e.target.dataset.name)
        let i = 0;
    let speed = 6.9;
    let currentSession = session
    typeWriter()

    function typeWriter() {

        if (i < txt.length && currentSession === session) {
            document.getElementById("generatedText").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

}

