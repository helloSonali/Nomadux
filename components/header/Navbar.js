import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <Link href="/">Home</Link>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          About
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link href="/about/mission">Our Mission</Link>
            <Link href="/about/cofounder">Nomadux Cofounder</Link>
            <Link href="/about/product">Our Product</Link>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropbtn">Contact</button>
        <div className="dropdown-content">
          <Link href="/contact">Contact Page</Link>
          <Link href="/payment">Payment Page</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
