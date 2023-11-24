import PopUp from './lib/component/popUp/PopUp'
import { useState } from 'react';
function App() {
  const [message] = useState("Employee Created !");
  const [popupShow, setPopupShow] = useState(true);
  const [fontColor] = useState('#333');
  const [bgColorCross]= useState('#333');
  const [bgColorContainerModal]= useState('#fff');
  const [opcityMainBg]= useState(0.5);
  const [mainBgColor]= useState('black');
  return (
    <div className="App">
    <PopUp mainBgColor={mainBgColor} opcityMainBg={opcityMainBg} bgColorCross={bgColorCross} bgColorContainerModal={bgColorContainerModal} fontColor={fontColor} message={message} trigger={popupShow} setTrigger={setPopupShow}/>
    </div>
  );
}

export default App;
