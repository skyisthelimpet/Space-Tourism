
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


const buttonList = ['Launch vehicle', 'Spaceport', 'Space capsule']

try {
    const destDiv = document.getElementById('tech-div');
    destDiv.addEventListener('click', async function (event) {

        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return
        }

        var index = event.target.id;

        const response = await fetch("./../data.json");
        const jsonData = await response.json();

        const destList = {
            'Launch vehicle': 0,
            'Spaceport': 1,
            'Space capsule': 2,
        }

        event.target.classList.add('bg-[#FFFFFF]', 'text-black')
        for (let x = 0; x < buttonList.length; x++) {
            const element = buttonList[x];
            if (element != event.target.id) {
                document.getElementById(element).classList.remove('bg-[#FFFFFF]', 'text-black')
            }
        }

        document.getElementById('tech-p-desktop').src = jsonData.technology[destList[index]].images.portrait;
        document.getElementById('tech-p-mobile').src = jsonData.technology[destList[index]].images.landscape;
        document.getElementById('tech-header').innerText = jsonData.technology[destList[index]].name.toUpperCase();
        document.getElementById('tech-paragraph').innerText = jsonData.technology[destList[index]].description;

        window.scrollTo({ top: 0, behavior: 'smooth' })

    })
} catch (error) {
    console.log('')
}