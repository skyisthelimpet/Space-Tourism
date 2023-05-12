
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

const buttonList = ['Moon', 'Mars', 'Europa', 'Titan']

try {
    const destDiv = document.getElementById('dest-div');
    destDiv.addEventListener('click', async function (event) {

        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return
        }

        var index = event.target.id;

        const response = await fetch("./../data.json");
        const jsonData = await response.json();

        const destList = {
            'Moon': 0,
            'Mars': 1,
            'Europa': 2,
            'Titan': 3
        }

        event.target.classList.add('border-b-2')
        for (let x = 0; x < buttonList.length; x++) {
            const element = buttonList[x];
            if (element != event.target.id) {
                document.getElementById(element).classList.remove('border-b-2')
            }
        }

        document.getElementById('planet-photo').src = jsonData.destinations[destList[index]].images.png;
        document.getElementById('destination-header').innerText = jsonData.destinations[destList[index]].name.toUpperCase()
        document.getElementById('dest-paragraph').innerText = jsonData.destinations[destList[index]].description
        document.getElementById('distance').innerText = jsonData.destinations[destList[index]].distance.toUpperCase()
        document.getElementById('travel').innerText = jsonData.destinations[destList[index]].travel.toUpperCase()
        window.scrollTo({ top: 0, behavior: 'smooth' })

    })
} catch (error) {
    console.log('')
}


