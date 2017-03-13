import Es6Test from "./js/es6";

function App() {
    document.getElementById("app").innerHTML = "<h1>Hello world!</h1>";
    Es6Test.testLetAndConst();
}
new App();