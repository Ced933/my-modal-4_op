# Presentation

Accessible modal **PopUp** component for React.JS


# Install

``` bash 
npm i my-modal-component-4-op
```

## Exemple

Here is a simple example of my-modal-component-4-op being used in an app for a form 
``` bash 
import  React, { useState } from  'react';
import { PopUp } from  'my-modal-component-4-op';

export  default  function Form () {
# Change text 
const [message] =  useState("Employee Created !");
# Change font color
const [fontColor] =  useState('#333');
# Change Bg color of cross
const [bgColorCross]=  useState('#333');
# Change Bg color modal
const [bgColorContainerModal]=  useState('#fff');  
# Change opacity of main Bg
const [opcityMainBg]=  useState(0.5); 
# Change color of main Bg
const [mainBgColor]=  useState('black'); 
const [popupShow, setPopupShow] =  useState(false);

const  handleSubmit  = ()=>{
...
setPopupShow(true)
}
return (
<>

	<PopUp  mainBgColor={mainBgColor}  opcityMainBg={opcityMainBg}  bgColorCross={bgColorCross}  bgColorContainerModal={bgColorContainerModal}  fontColor={fontColor}  message={message}  trigger={popupShow}  setTrigger={setPopupShow}/>

	<form  onSubmit={handleSubmit} >
		...
	</form>
</>
)
}
```


