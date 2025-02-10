let score = [0];
let score1 = [0];
let divs = document.querySelectorAll('div');
let article  = document.querySelectorAll('article');
let red = [[17 , 7] , [54 , 34] , [62 , 19] , [64 , 60] , [87 , 36] , [93 , 73], [95 , 75], [98 , 79]];
let green = [[1 , 38] , [4 , 14] , [9 , 31] , [21 , 42] , [28 , 84] , [51 , 67] , [72 , 91] , [80 , 99]];
let dice = document.querySelector('img');

let img=['https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/900px-Dice-4-b.svg.png?20231029222734',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/900px-Dice-5-b.svg.png?20231029222800',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/900px-Dice-6-b.svg.png?20231029222821' ];
let chance = false;
    dice.addEventListener('click' , function(){
        let n = Math.round(Math.random()*5);
        dice.src = img[n];
        if(chance === false){
            if(score[score.length-1]+(n+1)<100){
                degrade(score);
            score.push(score[score.length-1]+(n+1));
                checkLadder(score);
                checkSnake(score);
                update(score);
                if(score[score.length-1]===score1[score1.length-1]){
                    degrade(score1);
                    score1 =[0];
                }
            }
            else if(score[score.length-1]+(n+1)==100){
                degrade(score);
                score.push(score[score.length-1]+(n+1));
                update(score);
                setTimeout(() => {
                    alert('Player 1 wins !!');
                }, 100);
            }
            chance = true;
        }
        else {
            if(score1[score1.length-1]+(n+1)<100){
                degrade(score1);
            score1.push(score1[score1.length-1]+(n+1));
                checkLadder1(score1);
                checkSnake1(score1);
                update1(score1);
                if(score1[score1.length-1] === score[score.length-1]){
                    degrade(score);
                    score = [0];
                }
            }
            else if(score1[score1.length-1]+(n+1)==100){
                degrade(score1);
                score1.push(score1[score1.length-1]+(n+1));
                update1(score1);
                setTimeout(() => {
                    alert('Player 2 wins !!');
                }, 100);
            }
            chance = false;
        }
       
    })
function update1(score){
    for(let div of divs){
        if(eval(div.innerText)===score[score.length-1]){
            div.parentElement.style.backgroundColor = 'orange';
        }
    }
}

function checkSnake1(score){
    for(let arr of red){
        if(arr[0]==score[score.length-1]){
            setTimeout(()=>{
                update1(score);
                degradered(score);
                score.push(arr[1]);
                update1(score);
            },350)
            
        }
    }
}

function checkLadder1(score){
    for(let arr of green){
        if(arr[0]==score[score.length-1]){
            setTimeout(()=>{
                update1(score);
                degradegreen(score);
                score.push(arr[1]);
                update1(score)
            },350)
            
        }
    }
}



function checkSnake(score){
    for(let arr of red){
        if(arr[0]==score[score.length-1]){
            setTimeout(()=>{
                update(score);
                degradered(score);
                score.push(arr[1]);
                update(score);
            },350)
            
        }
    }
}
function checkLadder(score){
    for(let arr of green){
        if(arr[0]==score[score.length-1]){
            setTimeout(()=>{
                update(score);
                degradegreen(score);
                score.push(arr[1]);
                update(score)
            },350)
            
        }
    }
}

function update(score){
    for(let div of divs){
        if(eval(div.innerText)===score[score.length-1]){
            div.parentElement.style.backgroundColor = 'yellow';
        }
    }
    
}

function degrade(score){
    for(let div of divs){
        if(eval(div.innerText)===score[score.length-1]){
            div.parentElement.style.backgroundColor = 'white';
        }
    }
}
function degradegreen(score){
    for(let div of divs){
        if(eval(div.innerText)===score[score.length-1]){
            div.parentElement.style.backgroundColor = 'green';
        }
    }
}
function degradered(score){
    for(let div of divs){
        if(eval(div.innerText)===score[score.length-1]){
            div.parentElement.style.backgroundColor = 'red';
        }
    }
}