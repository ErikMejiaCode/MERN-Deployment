import './App.css';
import {Route, Routes} from "react-router-dom"

import {Pirates} from "./views/Pirates"
import {NewPirate} from "./views/NewPirate"
import {OnePirate} from "./views/OnePirate"
import {NotFound} from "./views/NotFound"

function App() {
  return (
    <div className="container">
      
      <Routes>
        <Route path='/' element={<Pirates />} />
        <Route path='/pirates/:id' element={<OnePirate/>} />
        <Route path='/pirates/new' element={<NewPirate />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/pirates/edit/:id' element={<Edit />} /> */}
      </Routes>

    </div>
  );
}

export default App;
