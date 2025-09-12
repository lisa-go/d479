import '../styles/nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
  const navList = ['PLAY', 'EAT', 'STAY', 'MOVE'];
  const tempList = navList.filter((page) => page !== currentPage);

  return (
    <ul id={currentPage == 'HOME' ? 'home-nav' : undefined}>
      {tempList.map((n, i) => (
        <li
          key={i}
          id={`${n.toLowerCase()}-nav`}
          onClick={() => setCurrentPage(n)}>
          {n}
        </li>
      ))}
    </ul>
  );
}
