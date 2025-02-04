import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);


  const options = [
    { value: 'option1', label: <a href="Personal">Profile Card</a> },
    { value: 'option2', label: <a href="Chat">Anchor</a> },
    { value: 'option3', label: <a href="Members">Members</a> },
    { value: 'option4', label: <a href="Settings"> Settings</a> }
  ];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="menu" onClick={toggleDropdown}>
      <i class="bi bi-list"></i>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} className="dropdown-item">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;