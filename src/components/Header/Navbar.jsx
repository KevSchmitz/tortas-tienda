import Cartwidget from "../Main/Cartwidget.jsx";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.js";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const catCollection = collection(db, "categories");
    getDocs(catCollection)
      .then((res) => {
        const sections = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setCategories(sections);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <Link className="logo" to="/">
            <img
              src="https://res.cloudinary.com/ddcg1jktl/image/upload/v1666313420/Logo_Definitivo_-_Sweet_Pop_h1uujz.png"
              alt=""
            />
          </Link>

          <div className="navbar-links">
            {categories.map((cat) => {
              return (
                <NavLink to={`/category/${cat.path}`} key={cat.id}>
                  <h2>{cat.title}</h2>
                </NavLink>
              );
            })}
          </div>
          <NavLink to="/cart">
            <Cartwidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
