import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'option1', label: 'Personal Information' },
    { value: 'option2', label: <a href="Chat">Anchor</a> },
    { value: 'option3', label: 'Members' },
    { value: 'option4', label: <a href="https://www.youtube.com/watch?v=8U43SE9VjJA"> Settings</a> }
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