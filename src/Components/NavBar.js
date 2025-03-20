import { NumResults } from "./App";
import { Logo } from "./Components/Logo";
import { Search } from "./Components/Search";

export function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
