import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'option1', label: 'Personal Information' },
    { value: 'option2', label: 'Members' },
    { value: 'option3', label: 'Settings' }
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