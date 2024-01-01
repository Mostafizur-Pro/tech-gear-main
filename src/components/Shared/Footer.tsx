const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-base-200 text-base-content">
      <div className="container mx-auto footer">
        <aside>
          <div>
            <h2 className="text-5xl font-semibold pb-3">Tech&Gear.</h2>

            <p className="">Providing reliable tech since 2023</p>
          </div>
        </aside>
        <nav className="hidden md:block">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Services
          </h4>
          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">Branding</a>
            </p>
            <p className="">
              <a className="link link-hover">Design</a>
            </p>
            <p className="">
              <a className="link link-hover">Marketing Policy</a>
            </p>
            <p className="">
              <a className="link link-hover">Advertisement</a>
            </p>
          </div>
        </nav>
        <nav className="hidden md:block">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Company
          </h4>
          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">About us</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Contact</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Jobs</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Press kit</a>{" "}
            </p>
          </div>
        </nav>
        <nav className="hidden md:block ">
          <h4 className="text-xl uppercase font-bold text-gray-400 pb-3">
            Legal
          </h4>

          <div className="space-y-1 text-sm">
            <p className="">
              <a className="link link-hover">Terms of use</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Privacy policy</a>{" "}
            </p>
            <p className="">
              <a className="link link-hover">Cookie policy</a>{" "}
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
