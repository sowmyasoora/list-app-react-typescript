import React from 'react';

const Header = (props : any) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'List App'
};

export default Header;
