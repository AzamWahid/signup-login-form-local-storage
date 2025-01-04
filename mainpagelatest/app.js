
if (!JSON.parse(localStorage.getItem('isLoggedIn'))) {
    window.location.href = '../login/login.html'
}


// Array of video objects
const videos = [
    { title: "Grocery Buddy", url: "./assets/1st.mp4", thumbnail: './assets/title/1stTitle.png', desc:'Grocery Buddy is a simple to-do list app using HTML, CSS, and JavaScript. It helps manage grocery tasks while practicing DOM manipulation and event handling—perfect for beginners!'},
    { title: "MenuFlex", url: "./assets/2nd.mp4", thumbnail: './assets/title/2ndTitle.png', desc:'A sleek, interactive order menu with intuitive filter options, built with HTML, CSS, and JavaScript. Ideal for demonstrating basic web development skills and providing a smooth user experience!' },
    { title: "roll_dice_game ", url: "./assets/3rd.mp4", thumbnail: './assets/title/3rdTitle.png', desc:'A two-player dice game built with HTML, CSS, and JavaScript, where players roll to earn points, can hold their score, and compete to reach the target first.' },
];

const videoTitle = document.querySelector('.videoTitle');
const videoDesc = document.querySelector('.videoDesc');


// Function to populate the video list
function populateVideoList() {
    const videoList = document.querySelector('.list-unstyled');
    videos.forEach((video, index) => {
        videoList.innerHTML += `<div class="card mb-3 video-card" style="max-width: 540px;" onclick="changeVideo('${video.url}','${video.title}','${video.desc}')">
                                <div class="row g-0">
                                    <div class="col-md-6">
                                    <img src="${video.thumbnail}" class="img-fluid rounded-start card-img" alt="">
                                    </div>
                                    <div class="col-md-6">
                                    <div class="card-body">
                                        <h3 class="card-title">${video.title}</h3>
                                        <p class="card-text">${video.desc}.</p>
                                    </div>
                                    </div>
                                </div>
                                </div>`
    });
}

// Function to change the video source
function changeVideo(url,title,desc) {
    const videoElement = document.getElementById("myVideo");
    const videoSource = document.getElementById("videoSource");
    console.log(url)
    videoSource.src = url;
    videoElement.load(); // Reload the video to change the source
    videoElement.play(); // Auto-play the video after source change
    console.log(title);
    videoTitle.innerHTML = title;
    videoDesc.innerHTML = desc;
}

// Play/Pause button functionality
function playPause() {
    const video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

window.onload = function () {
    const videoDiv = document.querySelector('#myVideo')
    videoDiv.innerHTML = `<source id="videoSource" src="'${videos[0].url}'" type="video/mp4">`

    populateVideoList();
};
