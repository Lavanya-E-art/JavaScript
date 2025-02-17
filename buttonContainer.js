// HTML
//=========================================================================================
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Buttons Grid</title>
    </head>
    <body>
        <script src="js/buttonsGrid.js" type="text/javascript"></script>
        <div class="btns">
        <div>
        <button id="btn1" class="btn"></button>
        <button id="btn2" class="btn"></button>
        <button id="btn3" class="btn"></button>
        </div>
        <div>
        <button id="btn4" class="btn"></button>
        <button id="btn5" class="btn">5</button>
        <button id="btn6" class="btn"></button>
        </div>
        <div>
        <button id="btn7" class="btn"></button>
        <button id="btn8" class="btn"></button>
        <button id="btn9" class="btn"></button>
        </div>
        </div>
    </body>
</html>


// CSS
//=========================================================================================
.btns {
  width: 75%;
  position: relative;
}

.btn {
  width: 30%;
  height: 48px;
  font-size: 24px;
}


//Javascript
//=========================================================================================
class Rotator {
    constructor(values) {
    this.values = values;
  }

  rotation() {
    this.values.unshift(this.values.pop());
  }

  round() {
    this.rotation();
    this.render();
  }

  render() {
    const [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.values;
    const hashTable = {btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4};

    for (const key in hashTable) {
      document.getElementById(key).innerHTML = hashTable[key];
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rotator = new Rotator([1, 2, 3, 6, 9, 8, 7, 4]);
  rotator.render();
  document.getElementById('btn5').addEventListener('click', () => { rotator.round(); });
});


