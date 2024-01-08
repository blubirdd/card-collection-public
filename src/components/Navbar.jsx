import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '/logo.png'
import Toggle from '../components/ThemeToggle';
import Alert from './Alert';
function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const [currentPageName, setCurrentPageName] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const currentPage = path.split('/').pop();
    const formattedPageName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

    setCurrentPageName(formattedPageName);
  }, [location]);

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/onepiece');
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* {showModal && (
        <Alert onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
      )} */}
      <header className="fixed top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <Link to="/">
            <div className="flex items-center justify-between">
              <img className="h-8 mr-2 flex-shrink-0" src={logo} alt="Logo" />
              <a className="flex-none text-lg md:text-lg  font-semibold " aria-label="Brand">
                <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-black text-transparent dark:to-blue-50 ">
                  Card Collection {currentPageName ? `- ${currentPageName}` : ''}
                  {/* Card Collection */}
                </span>
              </a>
              <div className="md:hidden">
                <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <svg className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <NavLink to="/home" className="aria-[current=page]:underline dark:aria-[current=page]:text-white font-bold text-gray-700 hover:text-gray-950 hover:underline decoration-2 sm:py-6 dark:text-gray-300 dark:hover:text-gray-200">
                Home
              </NavLink>
              <NavLink to="/pokemon" className="aria-[current=page]:underline dark:aria-[current=page]:text-white font-bold text-gray-700 hover:text-gray-950 hover:underline decoration-2 sm:py-6 dark:text-gray-300 dark:hover:text-gray-200">
                Pokemon
              </NavLink>
              <NavLink to="/onepiece" className="aria-[current=page]:underline dark:aria-[current=page]:text-white font-bold text-gray-700 hover:text-gray-950 hover:underline decoration-2 sm:py-6 dark:text-gray-300 dark:hover:text-gray-200">
                One Piece
              </NavLink>
              <NavLink to="/other" className="aria-[current=page]:underline dark:aria-[current=page]:text-white font-bold text-gray-700 hover:text-gray-950 hover:underline decoration-2 sm:py-6 dark:text-gray-300 dark:hover:text-gray-200">
                Other
              </NavLink>
              <Toggle />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar