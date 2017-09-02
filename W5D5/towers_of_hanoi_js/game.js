const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {

  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  promptMove(callback) {
    console.log(this.towers);

    reader.question('Which tower do you want to choose from?', (tower1) => {
      let startTowerIdx = tower1;
      reader.question('Which tower do you want to move to?', (tower2) => {
        let endTowerIdx = tower2;
        callback(startTowerIdx, endTowerIdx)
      });


    });
    // self.isValidMove(startTowerIdx, endTowerIdx)
  }

  ifValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx];
    let endTower = this.towers[endTowerIdx];

    if (endTower.length === 0) {
      return true;
    }

    if (startTower[startTower.length - 1] < endTower[endTower.length - 1]) {
      return true;
    } else {
      return false;
    }
  }

  

}

let g = new Game()
g.promptMove()
