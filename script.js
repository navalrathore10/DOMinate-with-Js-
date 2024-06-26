const hero = document.getElementById('gallery');
const thumbnails = document.querySelectorAll('.thumbnail');

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        const imageUrl = thumbnails[i].src;
        const currentBgImage = hero.style.backgroundImage.slice(5, -2);

        if (imageUrl !== currentBgImage) {
            // Fade out the current background image
            hero.style.transition = 'opacity 300ms ease-in-out';
            hero.style.opacity = '0.5';

            setTimeout(() => {
                // Change the background image and fade it in
                hero.style.backgroundImage = 'url(' + imageUrl + ')';
                hero.style.opacity = '1';
            }, 300); // Wait for the fade-out transition to complete
        }
    });
}






//   ------------------------------ Slider Code Starts Here 

var ImagesSldr = document.getElementsByClassName("imageSlider");
var InnerSldr = document.getElementById("InnerSlider");
var images = document.getElementsByClassName("slider-image");
var nxtBtn = document.getElementById("nxt");
var prvBtn = document.getElementById("prv");
var poe = 0;

function slideleft() {
    var remaining = images.length - poe - 8;
    var slideCount = remaining < 5 ? remaining : 5;
    poe += slideCount;
    for (var img of images) {
        img.style.transform = `translateX(-${poe * 100}%)`;
    }
    if (remaining < 5) {
        nxtBtn.disabled = true;
    }
    prvBtn.disabled = false;
}

function slideright() {
    poe -= 5;
    if (poe <= 0) {
        poe = 0;
        prvBtn.disabled = true;
    }
    for (var img of images) {
        img.style.transform = `translateX(-${poe * 100}%)`;
    }
    nxtBtn.disabled = false;
}

nxtBtn.addEventListener('click', slideleft);
prvBtn.addEventListener('click', slideright);



// ---------------------------------------  To-do list app STarts HEre 


const taskText = document.getElementById('todo-input-box');
const taskList = document.getElementById('list-container');


taskText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});



function addTask() {
    const taskTextValue = taskText.value.trim();


    if (taskTextValue === '') {
        alert('Please enter a task!');
        return;
    }


    const li = document.createElement('li');
    li.className = 'task bg-[#e3e3e3] rounded-lg p-4 flex items-center justify-between mb-2';
    li.addEventListener('click', function () {
        toggleTicked(this);
    });
    li.innerHTML = `
        <div class="flex items-center text-[#242424]"">
            <div class="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-4" id="tickdot">
                <i class="fas fa-circle fa-xs text-white" id="tickdot-inner"></i>
            </div>
            <span id="tasktext">${taskTextValue}</span>
        </div>
        <i onclick="deleteTask(this)" class="text-red-600 fas fa-trash-alt cursor-pointer"></i>
    `;

    taskList.appendChild(li);

    taskText.value = '';
}

function deleteTask(element) {
    element.parentElement.remove();
}

function toggleTicked(taskElement) {
    const tickDot = taskElement.querySelector('#tickdot');
    const tickDotInner = taskElement.querySelector('#tickdot-inner');
    const taskText = taskElement.querySelector('#tasktext')

    if (tickDot.classList.contains('border-white')) {
        tickDot.classList.remove('border-white');
        tickDot.classList.add('border-green-400');
        tickDotInner.classList.remove('text-white');
        tickDotInner.classList.add('text-green-400');
        taskText.classList.add('text-cut');
    } else {
        tickDot.classList.add('border-white');
        tickDot.classList.remove('border-green-400');
        tickDotInner.classList.add('text-white');
        tickDotInner.classList.remove('text-green-400');
        taskText.classList.remove('text-cut');

    }
}

// --------------------------------------- NOtes app Starts Here 


const noteText = document.getElementById('notes-input-box');
const NotesList = document.getElementById('notes-container');

noteText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addNote();
    }
});

function addNote() {
    const noteTextValue = noteText.value.trim();

    if (noteTextValue === '') {
        alert('Please enter a Note!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'note bg-[#e3e3e3] rounded-lg flex items-top justify-start mb-2 overflow-hidden';
    li.addEventListener('click', function () {
        toggleTicked(this);
    });
    li.innerHTML = `
        <div class="note-container flex flex-col items-center justify-start text-[#242424] mb-4 w-full ">
            <div class="note-header flex justify-between items-center bg-yellow-300 px-5 w-full h-[40px] mb-2 ">
                <span class="note-title text-lg font-semibold">Note.</span>
                <i onclick="deleteNote(this)" class="text-red-600 fas fa-trash-alt cursor-pointer"></i>
            </div>
            <div class="note-content w-full px-4 flex justify-start">
                <span id="tasktext">${noteTextValue}</span>
            </div>
        </div>
    `;

    NotesList.appendChild(li);

    // Clear input
    noteText.value = '';
}

function deleteNote(element) {
    const li = element.closest('li');
    if (li) {
        li.remove();
    }
}





//  ------------------------------------------------------------- Color Picker Starts here





const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const colorBox = document.getElementById('colorBox');
const rgbText = document.getElementById('rgbText');
const colCopy = document.getElementById('colCopy');

function updateColor() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colorBox.style.backgroundColor = rgbColor;
    rgbText.textContent = rgbColor;
    colCopy.style.backgroundColor = rgbColor;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);


function copyToClipboard() {
    const textToCopy = rgbText.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('RGB code copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

colCopy.addEventListener('click', copyToClipboard);

function textColorChange() {
    const fontColors = document.getElementsByClassName("font-colors");
    for (let i = 0; i < fontColors.length; i++) {
        fontColors[i].classList.remove("active")
    }
    document.getElementById(this.id).classList.add("active");
    let selectedcolor = document.querySelector(".active").dataset.color;
    document.body.style.color = selectedcolor;

}

updateColor();



// ---------------------------------------- Accordion Starts Here 

function toggleAccordion(clickedElement) {
    const content = clickedElement.nextElementSibling;

    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
        });
        content.style.display = 'block';
    }
}