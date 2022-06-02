import React, { useState } from 'react';

function Dropdown() {
  const [click, setClick] = useState(false);

  return (
 
      <ul
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
            <li >
            <img  className='whatsapp' src="/images/whatsapp.png" /><a target="_blank" href="https://www.whatsapp.com">Whatsapp</a> 
            </li>
            
            <li >
            <img  className='whatsapp' src="/images/email.png" /><a target="_blank" href="https://www.whatsapp.com">Email</a>
            </li>
      </ul>

  );
}

export default Dropdown;