import PopUp from './lib/component/popUp/PopUp'
import { useState } from 'react';
function App() {
  const [message] = useState("Employee Created !");
  const [popupShow, setPopupShow] = useState(true);
  return (
    <div className="App">
    <PopUp message={message} trigger={popupShow} setTrigger={setPopupShow}/>
    </div>
  );
}

export default App;
