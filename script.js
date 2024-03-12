document.getElementById('form').addEventListener('mouseenter',()=>{display('form-division')});
document.getElementById('section').addEventListener('mouseenter',()=>{display('section-division')});
document.getElementById('game').addEventListener('mouseenter',()=>{display('game-division')});
document.getElementById('formsubmit').addEventListener('submit', (e)=>{e.preventDefault(); showData(e)});
document.getElementById('list').addEventListener('mouseover',() =>{display('list-division')});
document.getElementById('objects').addEventListener('mouseenter',() =>{display('objects-division')});

var startButton =document.getElementById('s');
var pauseButton =document.getElementById('p');
var resetButton =document.getElementById('r');

function display(tag){
    let names=document.getElementsByClassName('tab');   
    for (let a of names){
        a.style.display ='none';
    }   
    document.getElementById(tag).style.display='flex';
}

var intervalId;
var pchange = null;
var t = parseInt(document.getElementById('time').textContent);

function start() {
    intervalId = setInterval(() => {
        t++;
        document.getElementById('time').textContent = t;
    }, 500);
   startButton.disabled = true;
   pauseButton.disabled = false;
   resetButton.disabled = false;
}
function pause() {
    if (intervalId) {
        if (pausebutton.textContent == 'Pause') {
            clearInterval(intervalId);
            pausebutton.textContent = "Resume";
        } else {
            start();
            pausebutton.textContent = 'Pause';
        }
    }
    startButton.disabled = true;
    resetButton.disabled = false;
}
function reset() {
        t = 0;
        document.getElementById('time').textContent = t;
        clearInterval(intervalId);
        startButton.disabled = false;
        pauseButton.disabled = true;
        resetButton.disabled = true;
    }
function showData(event){
    let name = document.getElementById('name').value;
    let pswd = document.getElementById('password').value;
    let value = "Hey!! "+name +  "\nyour Password is  "+pswd;
    document.getElementById('submit-form').innerText = value;
}

var data = [
    { id: 1, name: 'Ducati DesertX' },
    { id: 2, name: 'RD 350' },
    { id: 3, name: 'Royal enfield' },
    { id: 4, name: 'RX 100' },
    { id: 5, name: 'Duke' },
    { id: 6, name: 'Vespa 100' }
];

function renderData() {
    const tableBody = document.getElementById('data-body');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td><button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteItem(id) {
data = data.filter(item => item.id !== id);
renderData();
}
renderData();

var person =[
    {
        name: "Varun",
        place: "Warangal",
        email: "varunkumar.martha@everest.engineering"
    },
    {
        name: "Nikitha",
        place: "Hyderabad",
        email: "nikitha.medikonda@everest.engineering"},
    {
        name: "Usha sri",
        place: "Warangal",
        email: "u.gudikandula@everest.engineering"
    },
    {
        name: "Anjani",
        place: "Nizambad",
        email: "anjani.barlapati@everest.engineering"
    },
    {
        name: "Nagusha",
        place: "Hanomkonda",
        email: "nagusha.madasu@everest.engineering"
    },
    {
        name: "Anjali",
        place: "Karimnagar",
        email: "anjali.gogu@everest.engineering"
    }
];

  function renderobj() {
    const tableBody = document.getElementById('data-obj');
    tableBody.innerHTML = '';

    person.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>${item.name}</td>
        <td>${item.place}</td>
        <td>${item.email}</td>`;
        tableBody.appendChild(row);
    });
  }
  renderobj();
  
  function toggleNavbar(){
    var navbar= document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }