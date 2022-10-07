const jokes_database = [
`I invented a new world! <br> Plagiarism!`,
`What is the best thing about Switzerland? <br> I don't know, but the flag is a big plus.`,
`Did you hear about the mathematician who's afraid of negative numbers? <br> He'll stop at nothing to avoid them.`,
`Why do we tell actors to "braek the leg?" <br> Because every play has a cast.`,
`Helvetica and Times New Roman walk into a bar. <br> "Get out of here!" shouts the bartender. "We don't serve your type!"`,
`Yesterday I saw a guy spill all his Scrabble letters on the road. <br> I asked him, "What's the word on the street?"`,
`Knock! Knock! Who’s there? <br> Control Freak. <br> Con… Ok, <br> now you say, “Control Freak Who?”`,
`Hear about the new restaurant called Karma? <br> There’s no menu: You get what you deserve.`,
`A woman in labor suddenly shouted, <br> “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!” <br> “Don’t worry,” said the doc. “Those are just contractions.”`,
`Did you hear about the actor who fell through the floorboards? <br> He was just going through a stage.`
];
const prograss = document.getElementById('prograss');
const percentComplete = document.querySelector('.percentComplete');
const loading = document.querySelector('.loading');
const bodyArea = document.getElementById('bodyArea');
const rangeInput = document.getElementById('rangeInput');
const goTo = document.getElementById('goTo');
const jokeNumber = document.getElementById('joke-no');
const toastArea = document.getElementById('toast');
const jokeArea = document.getElementById('jokeArea');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const flag = {
    counter: 0
}

const prog = {
    counter : 0
  }

const toastShower = () => {
    toastArea.style.visibility = 'visible';
    toastArea.style.transform = 'scale(1.2)';
    setTimeout(() => {
        toastArea.style.visibility = 'hidden';
        toastArea.style.transform = 'scale(0)';

    }, 3000);
}

const homePage = () => {
    jokeNumber.innerText = flag.counter + 1;
    jokeArea.style.transform = 'scale(1)';
    jokeArea.innerHTML = jokes_database[flag.counter];
}

const nextPage = (flag) => {
    if (flag.counter < (jokes_database.length - 1)) {
        flag.counter++;
        jokeArea.innerHTML = jokes_database[flag.counter];
        jokeArea.style.transform = 'scale(0)';
        setTimeout(() => {
        jokeArea.style.transform = 'scale(1)';
        }, 150);
        jokeNumber.innerText = flag.counter + 1;
    }
    else {
        jokeArea.style.transform = 'scale(0)';
        setTimeout(() => {
        jokeArea.style.transform = 'scale(1)';
        }, 150);
        toastShower();
        toastArea.innerHTML = `<p>No next joke</p>`;
    }
}

const previousPage = (flag) => {
    if (flag.counter != 0) {
        flag.counter--;
        jokeArea.innerHTML = jokes_database[flag.counter];
        jokeArea.style.transform = 'scale(0)';
        setTimeout(() => {
        jokeArea.style.transform = 'scale(1)';
        }, 150);
        jokeNumber.innerText = flag.counter + 1;
    }
    else {
        jokeArea.style.transform = 'scale(0)';
        setTimeout(() => {
        jokeArea.style.transform = 'scale(1)';
        }, 150);
        toastShower();
        toastArea.innerHTML = `<p>No previous joke</p>`
    }
}

goTo.addEventListener('click', () =>{
    if (rangeInput.value <= 0){
        toastArea.innerHTML = `<p>Please enter 1 or greater</p>`;
        toastShower();
    }
    else if(rangeInput.value > (jokes_database.length)){
        toastArea.innerHTML = `<p>Please enter ${jokes_database.length} or lesser</p>`;
        toastShower();
    }
    else{
        jokeNumber.innerText = rangeInput.value;
        flag.counter = rangeInput.value - 1;
        jokeArea.style.transform = 'scale(0)';
        setTimeout(() => {
            jokeArea.style.transform = 'scale(1)';
        }, 150);
        jokeArea.innerText = jokes_database[rangeInput.value - 1];
        rangeInput.value = '';
    }
})

bodyArea.onload = homePage();

nextBtn.addEventListener('click', () => {
    nextPage(flag);
})

previousBtn.addEventListener('click', () => {
    previousPage(flag);
})

window.addEventListener('load', () =>{
  setInterval(() => {
  if(prog.counter <  100){
    prog.counter++;
    prograss.innerText = prog.counter.toString() + '%';
    percentComplete.style.width = prograss.innerText;
  }
}, 10);
  setTimeout(() => {
    loading.style.display = 'none';
  }, 1000);
})