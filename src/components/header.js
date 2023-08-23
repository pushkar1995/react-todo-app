import React from 'react';

function Header() {
  return (
    <header
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
    >
      <h1>
        Todos
      </h1>
      <h4>TODO Items will presist in the browser local storage</h4>
    </header>
  );
}

export default Header;
