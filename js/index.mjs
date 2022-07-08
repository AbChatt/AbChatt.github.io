(function () {
    "use strict";

    window.addEventListener('load', function () {
        document.querySelector('#overview').addEventListener('click', function (e) {
            e.preventDefault();
            let element = document.querySelector('#section-content');
            element.innerHTML = `
            <p>Hello! I'm Abhishek, a computer science graduate who's passionate about using technology to drive
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
            let element = document.querySelector('#section-content');
            element.innerHTML = `
            <p>Check back soon for updates!</p>
            `;
        });

        document.querySelector('#linkedin-button').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'https://www.linkedin.com/in/abhishek-chatterjee-668684173/';
        });

        document.querySelector('#github-button').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'https://github.com/AbChatt/';
        });

        document.querySelector('#email-button').addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'mailto:abhi1506@live.com';
        });

        document.querySelector('#toggle-theme').addEventListener('click', function (e) {
            console.log('clicked theme toggle');
            let element = document.querySelector('#toggle-theme');
            if (element.innerHTML == `<div class="dark icon-size"></div>`) {
                element.innerHTML = `<div class="light icon-size"></div>`;
                document.querySelector('body').style.backgroundColor = 'darkslategrey';
            } else {
                element.innerHTML = `<div class="dark icon-size"></div>`;
                document.querySelector('body').style.backgroundColor = 'teal';
            }
        });
    });
}());