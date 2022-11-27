const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-info" style={{ textAlign: "center" }}>
        <p>Síguenos en:</p>
        <a
          href="https://www.instagram.com/sweetpop.ve/"
          className="contact-icons"
        >
          <img
            style={{ width: "30px" }}
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram"
          />
        </a>
        <p>Todos los derechos reservados {`${date}`}.</p>
        <p>
          HECHO POR KEVIN SCHMITZ{" "}
          <a href="https://github.com/KevSchmitz?tab=repositories">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="github"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
