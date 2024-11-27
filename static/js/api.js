const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile())
    alert("Probably this page won't work in mobile devices. Thanks for visiting though.");

const api = {
    version: () => 'b1.2.0',
    getp: () => '1%',
    website: () => "https://heavygl.github.io",
    github: () => "https://github.com/HeavyGL/"
};

const dpp = document.querySelector("#dev-progress-percentage");
dpp.innerText = api.getp();

const progressDOM = document.querySelector("#dev-progress-dom");
progressDOM.style.width = api.getp();

const apiVersionDOM = document.querySelector("#api-version");
apiVersionDOM.innerText = api.version();

const downloadbtn = document.querySelector("#download-btn");
const insiderbtn = document.querySelector("#insider-btn");
const gotoGithub = () => {
    window.location.href = api.github();
};

downloadbtn.addEventListener('click', gotoGithub);
insiderbtn.addEventListener('click', gotoGithub);