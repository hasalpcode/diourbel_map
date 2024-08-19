import React, { useState } from 'react';
import '../../../../public/styles/dropdown.css'; // Assurez-vous d'importer le fichier CSS pour le style du dropdown

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
