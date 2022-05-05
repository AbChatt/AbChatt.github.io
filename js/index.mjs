"use strict";

document.querySelector('#overview').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked overview!');
    let element = document.querySelector('#section-content');
    element.innerHTML = `
    <p>Hello! I'm Abhishek, a fourth year undergraduate who's passionate about using technology to drive
        societal change. I'm keenly interested in backend development and AI and love learning about tech!
    </p>

    <p>If you're new around these parts, I'd recommend checking out the Being Seen, EcoSecure and
        SigmaCapital projects :) - some of my best work to date.</p>

    <p>Fun fact: When I'm not poring over code, I train for cross-country runs. Hoping to run my first 10K
        this year!</p>

    <p>Always interested in collaborating with others, so feel free to reach out, even if its just to chat!
    </p>
    `;
});

document.querySelector('#projects').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked projects!');
    let element = document.querySelector('#section-content');
    element.innerHTML = `
    <p>Check back soon for updates!</p>
    `;
});

document.querySelector('#linkedin-button').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked linkedin!');
});

document.querySelector('#github-button').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked github!');
});

document.querySelector('#email-button').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked email!');
});