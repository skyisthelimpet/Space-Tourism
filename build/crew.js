
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}



const buttonList = ['Douglas Hurley', 'Mark Shuttle', 'Victor Glover', 'Anous Ansari']

const crewDiv = document.getElementById('crew-div');
crewDiv.addEventListener('click', async function (event) {
    const isButton = event.target.nodeName === 'BUTTON'
    if (!isButton) {
        return;
    }
    var index = event.target.id;

    event.target.classList.add('actve')
    for (let x = 0; x < buttonList.length; x++) {
        const element = buttonList[x];
        if (element != event.target.id) {
            document.getElementById(element).classList.remove('actve')
        }
    }

    const response = await fetch("./../data.json");
    const jsonData = await response.json();

    const destList = {
        'Douglas Hurley': 0,
        'Mark Shuttle': 1,
        'Victor Glover': 2,
        'Anous Ansari': 3
    }

    document.getElementById('name').innerText = jsonData.crew[destList[index]].name.toUpperCase();
    document.getElementById('role').innerText = jsonData.crew[destList[index]].role.toUpperCase();
    document.getElementById('bio').innerText = jsonData.crew[destList[index]].bio;
    document.getElementById('crew-desktop-photo').src = jsonData.crew[destList[index]].images.png
    document.getElementById('crew-mobile-photo').src = jsonData.crew[destList[index]].images.png;
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
