import React from "react";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import './App.css';
import Day16 from "./components/Day16/Day16";
import Day17 from "./components/Day17/Day17";
import Day18 from "./components/Day18/Day18";
import Day19 from "./components/Day19/Day19";
import Day20 from "./components/Day20/Day20";
import Day21 from "./components/Day21/Day21";
import Day22 from "./components/Day22/Day22";
function App()
{
    return (
    <Router>
        <Switch>
            <Route exact path="/day16">
                <Day16/>
            </Route>
            <Route exact path="/day17">
                <Day17/>
            </Route>
            <Route exact path="/day18">
                <Day18/>
            </Route>
            <Route exact path="/day19">
                <Day19/>
            </Route>
            <Route exact path="/day20">
                <Day20/>
            </Route>
            <Route exact path="/day21">
                <Day21/>
            </Route>
            <Route exact path="/day22">
                <Day22/>
            </Route>

        </Switch>
    </Router>
    );
}
export default App;