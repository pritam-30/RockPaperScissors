
let isPlaying = false ; 
let set;



let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    loses : 0,
    ties : 0 
  }; 

function reset() {
    score = { wins: 0, loses: 0, ties: 0 };
    localStorage.removeItem('score');
    document.querySelector('.one').textContent = `wins : ${score.wins} losses : ${score.loses} ties : ${score.ties}`;
  }

function Rock(userValue) {   
    const choices = ['rock', 'paper', 'seizors'];
    const computer_value = choices[Math.floor(Math.random() * choices.length)];

    if(computer_value >= 0 && computer_value < 1/3){
      computer_value = "rock";
    }
    else if(computer_value >= 1/3 && computer_value < 2/3){
      computer_value = "seizors";
    }
    else if(computer_value >= 2/3 && computer_value < 1){
      computer_value = "paper";
    } 

    let result = '';
    if (userValue === computer_value) {
      result = 'It\'s a tie!';
      score.ties++;
    } else if (
      (userValue === 'rock' && computer_value === 'seizors') ||
      (userValue === 'paper' && computer_value === 'rock') ||
      (userValue === 'seizors' && computer_value === 'paper')
    ) {
      result = 'You win' ;
      score.wins++;
    } else {
      result = 'You lose!';
      score.loses++;
    }
    
  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.one').textContent = `wins : ${score.wins} losses : ${score.loses} ties : ${score.ties}`;
  document.querySelector('.moves').innerHTML = `You Chose : ${getImage(userValue)}<br>
                                                Computer Chose : ${getImage(computer_value)}`
  document.querySelector('.result').textContent = result;     
} ;

function getImage(choice) {
    const images = {
      rock: 'https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png',
      paper: 'https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png',
      seizors: 'https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png'
    };
    return `<img src="${images[choice]}" alt="${choice}" style="width:30px;height:30px;">`;
};

function Auto() {
if (!isPlaying) {
isPlaying = true;
document.querySelector(".Auto").textContent =  "Stop Play";
 set = setInterval(function Roc() {   
    const choices = ['rock', 'paper', 'seizors'];
    const computer_value = choices[Math.floor(Math.random() * choices.length)];
    const userValue = choices[Math.floor(Math.random() * choices.length)];

    if(computer_value >= 0 && userValue < 1/3 && user >= 0 && userValue < 1/3){
      computer_value = "rock";
    }
    else if(computer_value >= 1/3 && computer_value < 2/3 && userValue >= 1/3 && userValue < 2/3){
      computer_value = "seizors";
    }
    else if(computer_value >= 2/3 && computer_value < 1 && userValue >= 2/3 && userValue < 1){
      computer_value = "paper";
    } 

    let result = '';
    if (userValue === computer_value) {
      result = 'It\'s a tie!';
      score.ties++;
    } else if (
      (userValue === 'rock' && computer_value === 'seizors') ||
      (userValue === 'paper' && computer_value === 'rock') ||
      (userValue === 'seizors' && computer_value === 'paper')
    ) {
      result = 'You win' ;
      score.wins++;
    } else {
      result = 'You lose!';
      score.loses++;
    }
    
  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.one').textContent = `wins : ${score.wins} losses : ${score.loses} ties : ${score.ties}`;
  document.querySelector('.moves').innerHTML = `You Chose : ${getImage(userValue)}<br>
                                                Computer Chose : ${getImage(computer_value)}`
  document.querySelector('.result').textContent = result;     
} , 500);
}

else {
clearInterval(set);
document.querySelector(".Auto").textContent =  "Auto Play";
isPlaying = false;
}

}
