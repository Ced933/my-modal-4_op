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
const [message] =  useState("Employee Created !"); //initialized own message
const [popupShow, setPopupShow] =  useState(false);
const  handleSubmit  = ()=>{
...
setPopupShow(true)
}
return (
<>

	<PopUp  message={message}  trigger={popupShow}  setTrigger={setPopupShow}  />

	<form  onSubmit={handleSubmit} >
		...
	</form>
</>
)
}
```


