const homeTeam = ['Tranmere','Liverpool','Chelsea'];
const status = ['beat','lost to','drew with'];
const awayTeam = ['Everton', 'Manchester United', 'Chester'];
const result = [];

function randomNum(number){
    return Math.floor(Math.random() * number);
}

function getMessage(){
    let num = 0;
    num = randomNum(homeTeam.length);
    result.push(homeTeam[num] + ' ');
    num = randomNum(status.length);
    result.push(status[num] + ' ');
    num = randomNum(awayTeam.length);
    result.push(awayTeam[num]);
}

console.log(getMessage());
