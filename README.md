# Getting Started with our React Modul

npm i my-modal-component-4-op

Dependencies :
### `npm i react`
### `npm i sass`

1. import { PopUp } from 'my-modal-component-4-op';
2. const [message] = useState("Employee Created !"); // personalized own message
3. const [popupShow, setPopupShow] = useState(false); initialized false 
4.  return (
    <>
        <PopUp message={message} trigger={popupShow} setTrigger={setPopupShow}/>
        <div onSubmit={handleSubmit}>
            ...
        </div>
    </>
  );
  5. In your function handleSubmit you have to put setPopupShow(true) then the popup will be appear each time you will submit the form 



