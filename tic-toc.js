let symbol = "X"
$("document").ready(()=>{
    createGameColumns();
    document.getElementById("whos-chance").innerHTML = `${symbol} turn`
})

function createGameColumns(){
    const game = document.getElementById("game-area");
    for(let i=0;i<3;i++){
        game.innerHTML += addCell(i.toString())
    }
}

function addCell (i){
   return  `
        <div class="column is-4" id=${i+0} onClick="addChance(${i},0)"></div>
        <div class="column is-4" id=${i+1} onClick="addChance(${i},1)"></div>
        <div class="column is-4" id=${i+2} onClick="addChance(${i},2)"></div>
   `
}

function addChance(row, col){
    const id = row.toString()+col.toString()
    const cell = document.getElementById(id);
    if(!cell.innerHTML ){
        cell.innerHTML = cell.innerHTML ||symbol;
        symbol = symbol === "X" ? "O" : "X"
        document.getElementById("whos-chance").innerHTML = `${symbol} turn`
        checkForWin(row,col)
    }
    
  
}

function checkForWin (row, col){
    const id=row.toString()+col.toString()
    const cell = document.getElementById(id).innerHTML;
    const winArrayCom = []
    winArray.map(i=> {
        if(i.includes(id)){
            winArrayCom.push(i)
        }
    });
console.log("winA", winArrayCom)
    winArrayCom.map(i=> {
        let isWon = true
        i.map(o=>{
            const data = document.getElementById(o).innerHTML;
            if(data !== cell){
                isWon = false
            }
        });
       if(isWon){
           document.getElementById("winner").innerHTML = cell + "wins";
           setTimeout(()=>{
            alert(`${cell} wins`)
            reset();
           },1000)
           
       }
    })

}

function reset(){
    for(let row=0;row<3;row++){
        for(let col=0;col<3;col++){
            const id = row.toString()+col.toString();
            const cell = document.getElementById(id);
            cell.innerHTML = "";
        }
        symbol = "X";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("whos-chance").innerHTML = symbol + " turn";
    }
}

const winArray = [
    [
        "00","01","02"
    ],
    [
        "10","11","12"
    ],
    [
        "20","21","22"
    ],
    [
        "00","10","20"
    ],
    [
        "01","11","21"
    ],
    [
        "02","12","22"
    ],
    [
        "00","11","12"
    ],
    [
        "02","11","20"
    ],
    [
        "00","11","22"
    ]
]

 