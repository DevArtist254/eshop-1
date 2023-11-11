import "./App.css"
import {Switch, Route} from "react-router-dom/cjs/react-router-dom"
import Homepage from "./pages/hompage.comp"

function App() {
 return (
  <div className="App">
   <Switch>
    <Route exact path="/" component={Homepage} />
   </Switch>
  </div>
 )
}

export default App
