import { useState } from 'react';
import '../styles/nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
  const navList = ['PLAY', 'EAT', 'STAY', 'MOVE', 'FAQ'];
  const tempList = navList.filter((page) => page !== currentPage);

  // prevent double click on nav bar
  const [disabled, setDisabled] = useState(false);
  const handleClick = (page) => {
    if (disabled) return;
    setDisabled(true);
    setCurrentPage(page);

    setTimeout(() => setDisabled(false), 1500);
  };

  return (
    <ul id={currentPage == 'HOME' ? 'home-nav' : undefined}>
      {tempList.map((n, i) => (
        <li
          key={i}
          id={`${n.toLowerCase()}-nav`}
          onClick={() => handleClick(n)}>
          {n}
        </li>
      ))}
    </ul>
  );
}
