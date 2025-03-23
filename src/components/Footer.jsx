function Footer() {
  return (
    <footer className="footer p-3 bg-dark text-white text-center">
      <div className="row">
        <p className="m-0">Built using REACT and CSS Bootstrap.</p>
      </div>
      <div className="p-3">
        <a
          className="p-2"
          href="https://www.linkedin.com/in/stuart-gross-jr-a0b76459/"
          target="_blank"
        >
          <img
            src="/In-White-14@2x.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
        <a className="p-2" href="https://github.com/sigros02" target="_blank">
          <img
            src="/github-mark-white.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
