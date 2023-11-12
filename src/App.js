import PopUp from './component/popUp/PopUp'
import { useState } from 'react';
function App() {

  const [popupShow, setPopupShow] = useState(false);
  return (
    <div className="App">
    
    <PopUp trigger={popupShow} setTrigger={setPopupShow}/>
    </div>
  );
}

export default App;
