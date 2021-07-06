/* Coronavirus API */

const baseURL = `https://api.covid19api.com/live/country/`;

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(baseURL + `united-states/status/confirmed`, requestOptions)
    .then((response) => response.json())
    .then((json) => displayStateData(json))
    .catch((error) => console.log(error));

function displayStateData(data) {
    console.log(data[0].Province);

    let provinceState00 = document.getElementById('state00').innerText = data[0].Province;
    let provinceState00_1 = document.getElementById('state00ModalLabel').innerText = data[0].Province;
    let provinceStats00 = document.getElementById('provinceStats00').innerHTML = `<span>Confirmed Total Cases:</span> ${data[0].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[0].Active}<br><span>Confirmed Deaths:</span> ${data[0].Deaths}<br><span>Recovered:</span> ${data[0].Recovered}`;

    let provinceState01 = document.getElementById('state01').innerText = data[1].Province;
    let provinceState01_1 = document.getElementById('state01ModalLabel').innerText = data[1].Province;
    let provinceStats01 = document.getElementById('provinceStats01').innerHTML = `<span>Confirmed Total Cases:</span> ${data[1].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[1].Active}<br><span>Confirmed Deaths:</span> ${data[1].Deaths}<br><span>Recovered:</span> ${data[1].Recovered}`;
    
    let provinceState02 = document.getElementById('state02').innerText = data[2].Province;
    let provinceState02_1 = document.getElementById('state02ModalLabel').innerText = data[2].Province;
    let provinceStats02 = document.getElementById('provinceStats02').innerHTML = `<span>Confirmed Total Cases:</span> ${data[2].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[2].Active}<br><span>Confirmed Deaths:</span> ${data[2].Deaths}<br><span>Recovered:</span> ${data[2].Recovered}`;

    let provinceState03 = document.getElementById('state03').innerText = data[3].Province;
    let provinceState03_1 = document.getElementById('state03ModalLabel').innerText = data[3].Province;
    let provinceStats03 = document.getElementById('provinceStats03').innerHTML = `<span>Confirmed Total Cases:</span> ${data[3].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[3].Active}<br><span>Confirmed Deaths:</span> ${data[3].Deaths}<br><span>Recovered:</span> ${data[3].Recovered}`;

    let provinceState04 = document.getElementById('state04').innerText = data[4].Province;
    let provinceState04_1 = document.getElementById('state04ModalLabel').innerText = data[4].Province;
    let provinceStats04 = document.getElementById('provinceStats04').innerHTML = `<span>Confirmed Total Cases:</span> ${data[4].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[4].Active}<br><span>Confirmed Deaths:</span> ${data[4].Deaths}<br><span>Recovered:</span> ${data[4].Recovered}`;

    let provinceState05 = document.getElementById('state05').innerText = data[5].Province;
    let provinceState05_1 = document.getElementById('state05ModalLabel').innerText = data[5].Province;
    let provinceStats05 = document.getElementById('provinceStats05').innerHTML = `<span>Confirmed Total Cases:</span> ${data[5].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[5].Active}<br><span>Confirmed Deaths:</span> ${data[5].Deaths}<br><span>Recovered:</span> ${data[5].Recovered}`;
    
    let provinceState06 = document.getElementById('state06').innerText = data[6].Province;
    let provinceState06_1 = document.getElementById('state06ModalLabel').innerText = data[6].Province;
    let provinceStats06 = document.getElementById('provinceStats06').innerHTML = `<span>Confirmed Total Cases:</span> ${data[6].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[6].Active}<br><span>Confirmed Deaths:</span> ${data[6].Deaths}<br><span>Recovered:</span> ${data[6].Recovered}`;

    let provinceState07 = document.getElementById('state07').innerText = data[7].Province;
    let provinceState07_1 = document.getElementById('state07ModalLabel').innerText = data[7].Province;
    let provinceStats07 = document.getElementById('provinceStats07').innerHTML = `<span>Confirmed Total Cases:</span> ${data[7].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[7].Active}<br><span>Confirmed Deaths:</span> ${data[7].Deaths}<br><span>Recovered:</span> ${data[7].Recovered}`;

    let provinceState08 = document.getElementById('state08').innerText = data[8].Province;
    let provinceState08_1 = document.getElementById('state08ModalLabel').innerText = data[8].Province;
    let provinceStats08 = document.getElementById('provinceStats08').innerHTML = `<span>Confirmed Total Cases:</span> ${data[8].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[8].Active}<br><span>Confirmed Deaths:</span> ${data[8].Deaths}<br><span>Recovered:</span> ${data[8].Recovered}`;
    
    let provinceState09 = document.getElementById('state09').innerText = data[9].Province;
    let provinceState09_1 = document.getElementById('state09ModalLabel').innerText = data[9].Province;
    let provinceStats09 = document.getElementById('provinceStats09').innerHTML = `<span>Confirmed Total Cases:</span> ${data[9].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[9].Active}<br><span>Confirmed Deaths:</span> ${data[9].Deaths}<br><span>Recovered:</span> ${data[9].Recovered}`;

    let provinceState10 = document.getElementById('state10').innerText = data[10].Province;
    let provinceState10_1 = document.getElementById('state10ModalLabel').innerText = data[10].Province;
    let provinceStats10 = document.getElementById('provinceStats10').innerHTML = `<span>Confirmed Total Cases:</span> ${data[10].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[10].Active}<br><span>Confirmed Deaths:</span> ${data[10].Deaths}<br><span>Recovered:</span> ${data[10].Recovered}`;

    let provinceState11 = document.getElementById('state11').innerText = data[11].Province;
    let provinceState11_1 = document.getElementById('state11ModalLabel').innerText = data[11].Province;
    let provinceStats11 = document.getElementById('provinceStats11').innerHTML = `<span>Confirmed Total Cases:</span> ${data[11].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[11].Active}<br><span>Confirmed Deaths:</span> ${data[11].Deaths}<br><span>Recovered:</span> ${data[11].Recovered}`;

    let provinceState12 = document.getElementById('state12').innerText = data[12].Province;
    let provinceState12_1 = document.getElementById('state12ModalLabel').innerText = data[12].Province;
    let provinceStats12 = document.getElementById('provinceStats12').innerHTML = `<span>Confirmed Total Cases:</span> ${data[12].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[12].Active}<br><span>Confirmed Deaths:</span> ${data[12].Deaths}<br><span>Recovered:</span> ${data[12].Recovered}`;

    let provinceState13 = document.getElementById('state13').innerText = data[13].Province;
    let provinceState13_1 = document.getElementById('state13ModalLabel').innerText = data[13].Province;
    let provinceStats13 = document.getElementById('provinceStats13').innerHTML = `<span>Confirmed Total Cases:</span> ${data[13].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[13].Active}<br><span>Confirmed Deaths:</span> ${data[13].Deaths}<br><span>Recovered:</span> ${data[13].Recovered}`;
    
    let provinceState14 = document.getElementById('state14').innerText = data[14].Province;
    let provinceState14_1 = document.getElementById('state14ModalLabel').innerText = data[14].Province;
    let provinceStats14 = document.getElementById('provinceStats14').innerHTML = `<span>Confirmed Total Cases:</span> ${data[14].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[14].Active}<br><span>Confirmed Deaths:</span> ${data[14].Deaths}<br><span>Recovered:</span> ${data[14].Recovered}`;
    
    let provinceState15 = document.getElementById('state15').innerText = data[15].Province;
    let provinceState15_1 = document.getElementById('state15ModalLabel').innerText = data[15].Province;
    let provinceStats15 = document.getElementById('provinceStats15').innerHTML = `<span>Confirmed Total Cases:</span> ${data[15].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[15].Active}<br><span>Confirmed Deaths:</span> ${data[15].Deaths}<br><span>Recovered:</span> ${data[15].Recovered}`;

    let provinceState16 = document.getElementById('state16').innerText = data[16].Province;
    let provinceState16_1 = document.getElementById('state16ModalLabel').innerText = data[16].Province;
    let provinceStats16 = document.getElementById('provinceStats16').innerHTML = `<span>Confirmed Total Cases:</span> ${data[16].Confirmed}<br><span>Confirmed Active Cases:</span> ${data[16].Active}<br><span>Confirmed Deaths:</span> ${data[16].Deaths}<br><span>Recovered:</span> ${data[16].Recovered}`;
}


displayStateData();