<!--
<input id="elem1" type="button" value="Click This 1"/>
<input id="elem2" type="button" value="Click This 2"/>
<Script>
    elem1.onclick = function () {
        alert('Tq for clicking the 1st button.');
    };
    elem2.onclick = function () {
        alert('Tq for clicking the 2nd button.');
    };
</Script>
-->
<!--
<button onclick="alert(this.innerHTML)">Click me</button>
-->

<!--
<input id="elem" type="button" value="Click me"/>
<script>
    function handler1() {
        alert('Welcome to my page.');
    };
    function handler2() {
        alert('Thank You for watching.');
    }
    elem.onclick = () => alert("Hello.");
    elem.addEventListener("click", handler1);
    elem.addEventListener("click", handler2);
</script>
-->
`
<!--
<button id="elem">Click Me</button>
<script>
    class Menu {
        handleEvent(event) {
            let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
            this[method](event);
        }
        onMousedown() {
            elem.innerHTML = "Mouse button pressed";
        }
        onMouseup() {
            elem.innerHTML += "..and released."
        }
    }
    let menu = new Menu();
    elem.addEventListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
</script>
-->

<!--
<input type="button" onclick="this.hidden=true" value="click to hide the text" />
-->

<!--
<head>
    <meta charset="utf-8">
    <style>
      #field {
        width: 200px;
        height: 150px;
        border: 10px solid black;
        background-color: #00FF00;
        overflow: hidden;
      }
    </style>
  </head>
  <body style="height:2000px">
    Click on a field to move the ball there.
    <br> The ball should never leave the field.
    <div id="field">
      <img src="https://en.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    </div>
  </body>
-->

<!--
<body>
  ▶ ▼ Sweets (click for Swwets)!
    <ul>
        <li>Doodh Peda</li>
        <li>Laddu</li>
        <li>Jalebi</li>
    </ul>
    ▶ ▼ Hot Snacks(click for hot)!
    <ul>
        <li>Bundi</li>
        <li>Mixture</li>
        <li>Kara Items</li>
    </ul>
</body>
-->
<!--
<style>
    body * {
      margin: 10px;
      border: 1px solid blue;
    }
  </style>
  <form>FORM
    <div>DIV
      <p>P</p>
    </div>
  </form>
  <script>
    for(let elem of document.querySelectorAll('*')) {
      elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
      elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
    }
  </script>
-->

<!--
<div id="menu">
    <button data-action="save">SAVE</button>
    <button data-action="load">LOAD</button>
    <button data-action="search">SEARCH</button>
</div>
<script>
    class Menu {
       constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
       }
       save() {
        alert('SAVING');
       }
       load() {
        alert('LOADING')
       };
       search() {
        alert('LOADING');
       }
       onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
       };
    }
    new Menu(menu);
</script>
-->

<!--
Counter: <input type="button" value="1" data-counter>
One more Counter: <input type="button" value="2" data-counter>
<script>
    document.addEventListener('click', function(event) {
        if (event.target.dataset.counter != undefined) {
        event.target.value++;
        }
    })
</script>
-->

<!--
<style>
  table {
     border-collapse: collapse;
   }
   th, td {
     border: 1px solid black;
     padding: 4px;
   }
   th {
     cursor: pointer;
   }
   th:hover {
     background: yellow;
   }
</style>
</head>
<body>
  <table id="grid">
    <thead>
      <tr>
        <th data-type="number">Age</th>
        <th data-type="string">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>20</td>
        <td>Johnny</td>
      </tr>
      <tr>
        <td>25</td>
        <td>Vanule</td>
      </tr>
      <tr>
        <td>32</td>
        <td>Arun</td>
      </tr>
      <tr>
        <td>29</td>
        <td>Arjun</td>
      </tr>
      <tr>
        <td>31</td>
        <td>Vasis</td>
      </tr>
    </tbody>
  </table>
  <script>
  </script>
</body>
-->

<!--
<script>
  function handler(event) {
    alert("...");
    event.preventDefault();
  }
</script>
<a href="https://w3.org" onclick="handler(event)">w3.org</a>
-->

<!--
<button id="elem" onclick="alert('Click!');">Autoclick</button>
<script>
  let event = new Event("click");
  elem.dispatchEvent(event);
</script>
-->

<!--
<button id="menu">Menu (click me)</button>
<script>
  menu.onclick = function() {
    alert(1);
    menu.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: true
    }));
    alert(2);
  };
  document.addEventListener('menu-open', () => alert('nested'));
</script>
-->

console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 1000);
for (let i = 0; i < 1e9; i++) {} // Long loop
console.log("End");