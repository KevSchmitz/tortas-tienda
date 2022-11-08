import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="background-header">
      <div className="filter">
        <Navbar />
        <div className="header-description">
          <h2>Tortas decoradas con buttercream 🎂🎨.</h2>
          <h3>Postres y mini dulces para toda ocasión✨</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
