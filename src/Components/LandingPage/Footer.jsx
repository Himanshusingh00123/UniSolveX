import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft border-t border-gray-300">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-11 me-3" alt="FlowBite Logo" />
              <span className="text-heading -ml-4 self-center text-2xl font-semibold whitespace-nowrap">
                UniSolve<span className="text-amber-500">X</span>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-indigo-600 text-heading uppercase">
                Quick Links
              </h2>

              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="hover:underline">
                    Admin
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-indigo-600 text-heading uppercase">
                Follow us
              </h2>

              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/Himanshusingh00123"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/himanshu-singh-48b026273"
                    className="hover:underline"
                  >
                    Linkdin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-indigo-600 text-heading uppercase">
                Resources
              </h2>

              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Study Guides
                  </Link>
                </li>

                <li>
                  <Link to="/" className="hover:underline">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © 2026{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              UniSolveX
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/"
              className="text-body hover:text-heading"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-singh-48b026273"
              className="text-body hover:text-heading ms-5"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.69H9.35V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a
              href="https://github.com/Himanshusingh00123"
              className="text-body hover:text-heading ms-5"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
