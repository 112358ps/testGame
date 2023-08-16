function startFlicker() {
    const flickeringText = document.getElementById("flickeringText");
    flickeringText.classList.add("flicker");
}

function stopFlicker() {
    const flickeringText = document.getElementById("flickeringText");
    flickeringText.classList.remove("flicker");
}

function hideDivOnEnter(event , hideId) {
    if (event.key === "Enter" ){
        hideDiv(hideId)
    }
}
function showDivOnEnter(event , showId) {
    if (event.key === "Enter"){
        showDiv(showId)
    }
}
function showDiv(showId) {
    document.getElementById(showId).style.display = ""; 
}

function hideDiv(hideId) {
    document.getElementById(hideId).style.display = "none"; 
}
function nextpage()
{
    hideDiv('myDiv');
    hideDiv('flickeringText');
    // form-players
    showDiv('form-players');
}
// const ladder1 =[2,0]
// const go_to1 =ladder1.flatMap((x=>[0,5])) 
// const ladder = [[2,0],[5,0]];
// const go_to1 = ladder.map(go_to)
// const go_to2 = ladder[1].map(go_to)
// const nichena = new Map()

// nichena.set([2,0] , [0,5]);
// nichena.set([5,0] , [7,2]);

// [
//     [[2,0],[0,5]],
//     [[5,0],[7,2]]
// ]);
function getPlayersCount(){

    // alert('Form submitted!');
    showDiv('div2');
    if(document.getElementById('computer').checked === true)
    {
        player1 = new PlayerData('player1-dynamic');
        comp1 = new PlayerData('player-computer');
        maxchance=1;

    }
    else if(document.getElementById('players2').checked === true)
    {
        player1 = new PlayerData('player1-dynamic');
        player2 = new PlayerData('player2-dynamic');
        maxchance=2;
    }
    else if(document.getElementById('players3').checked === true)
    {   

        player1 = new PlayerData('player1-dynamic');
        player2 = new PlayerData('player2-dynamic');
        player3 = new PlayerData('player3-dynamic');
        maxchance=3;
    }
    else if(document.getElementById('players4').checked === true)
    {
        player1 = new PlayerData('player1-dynamic');
        player2 = new PlayerData('player2-dynamic');
        player3 = new PlayerData('player3-dynamic');
        player4 = new PlayerData('player4-dynamic');
        maxchance=4;
    }

   
    
   return false;
}

function myFunction() {
    var x = document.getElementById("dicediv");
    if (x.style.display === "none") {
      x.style.display = "block";

      setTimeout(() => {  throwDiceAndMove(); x.style.display = "none";}, 300);
      
      
    } 
  }
function throwDiceAndMove(){
    diceRoll = Math.floor(Math.random() * 6) + 1;
        // diceRoll =0;
        document.getElementById('diceRollResults').innerHTML = diceRoll;
        console.log("changedsafdf asdf",chance,maxchance);
        
        if(chance == 0){
            //player 1 chance
            diceRollMvmt(player1,diceRoll);
            if (maxchance === 1){
                console.log("computer play");
                diceRoll = Math.floor(Math.random() * 6) + 1;
                diceRollMvmt(comp1,diceRoll);
                console.log("computer dice role/play completed");
            }
            // chance=1;
        }else if (chance === 1){
            
            diceRollMvmt(player2,diceRoll);
            // chance=0;
        }
        else if (chance === 2){
            diceRollMvmt(player3,diceRoll);
            // chance=0;
        }
        else if (chance === 3){
            diceRollMvmt(player4,diceRoll);
            // chance=0;
        }
        chance=(chance+1)%maxchance
}
class PlayerData {
    constructor(id){
        this.playerId = id;
        this.x_pos = 0;
        this.y_pos = 0;
        this.offset_y=-(document.getElementById(id).height+document.getElementById(id).y-(document.getElementById('board').height+document.getElementById('board').y));
        this.offset_x = -(document.getElementById(id).x -document.getElementById('board').x)
        
    }
    changePosition(diceRoll){
        if(this.x_pos+diceRoll >= 10){
            if(this.y_pos +1 >= 10){
                console.log('dont change position.... as dice is not in favor');
            }else{
                this.x_pos = (this.x_pos+diceRoll)%10;
                this.y_pos += 1;
            }
            console.log(this.x_pos,this.y_pos)
        }else{
            this.x_pos += diceRoll;
            console.log(this.x_pos,this.y_pos)
        }
        
        //ladder
        console.log(this.x_pos,this.y_pos)
        if( (this.x_pos == 2)&&(this.y_pos==0))
        {
            this.move(this.x_pos,this.y_pos);
            console.log('lineno',72);
            this.x_pos=0;
            this.y_pos=5;
        }
        else if( (this.x_pos == 5)&&(this.y_pos==0))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',78);
            this.x_pos=6;
            this.y_pos=2;
        }
        else if( (this.x_pos == 9)&&(this.y_pos==1))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',86);
            this.x_pos=9;
            this.y_pos=6;
        }
        else if( (this.x_pos == 5)&&(this.y_pos==3))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',93);
            this.x_pos=4;
            this.y_pos=5;
        }
        else if( (this.x_pos == 7)&&(this.y_pos==6))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',100);
            this.x_pos=7;
            this.y_pos=9;
        }
        else if( (this.x_pos == 2)&&(this.y_pos==6))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',107);
            this.x_pos=4;
            this.y_pos=9;
        }
        //snakes
        else if( (this.x_pos == 3)&&(this.y_pos==3))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',115);
            this.x_pos=0;
            this.y_pos=0;
        }
        else if( (this.x_pos == 4)&&(this.y_pos==2))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',122);
            this.x_pos=4;
            this.y_pos=0;
        }
        else if( (this.x_pos == 6)&&(this.y_pos==4))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',129);
            this.x_pos=8;
            this.y_pos=1;
        }
        else if( (this.x_pos == 4)&&(this.y_pos==6))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',139);
            this.x_pos=1;
            this.y_pos=5;
        }
        else if( (this.x_pos == 6)&&(this.y_pos==8))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',143);
            this.x_pos=6;
            this.y_pos=5;
        }
        else if( (this.x_pos == 0)&&(this.y_pos==9))
        {

            this.move(this.x_pos,this.y_pos);
            console.log('lineno',149);
            this.x_pos=0;
            this.y_pos=5;
        }
        else if( (this.x_pos == 8)&&(this.y_pos==9))
        {

           this.move(this.x_pos,this.y_pos);
            console.log('lineno',157);
            this.x_pos=8;
            this.y_pos=6;
        }
        //if its nichena
        // if (nichena.has((this.x_pos,this.y_pos))){
        //     var newXY = nichena.get((this.x_pos,this.y_pos))
        //     this.x_pos = newXY[0]
        //     this.y_pos = newXY[1]
        // }
        this.score();
        console.log("finally" , this.x_pos,this.y_pos)
    }
    
    move(x,y){
        document.getElementById(this.playerId).style.left= document.getElementById('board').width*(0.1*x) +this.offset_x+ 'px' 
        
        document.getElementById(this.playerId).style.top= -document.getElementById('board').height*(1-0.1*(10-y))+this.offset_y+ 'px' 
        console.log(document.getElementById(this.playerId).style.left,document.getElementById(this.playerId).style.top);
    }
    score()
    {
        document.getElementById(this.playerId+"-score").innerText = (this.x_pos + (10*this.y_pos)+1);
    }
}

// const diceRoll = Math.floor(Math.random() * 6) + 1
function diceRollMvmt(player, diceRoll){

    player.changePosition(diceRoll);
    setTimeout(() => {  
        player.move(player.x_pos,player.y_pos); 
        if(player.x_pos == 9 && player.y_pos == 9){
            console.log("Game over");
            // alert("Game over............................................" + player.playerId + " is winner")
            console.log(player.playerId + " player is won");  
            hideDiv("diceRollBlock");
        }
    
    }, 350);
    
    
}
// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }