import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import pokemon from '/home1.jpg'
import onepiece from '/home2.jpg'
import other from '/home3.jpg'
import Alert from '../components/Alert';
function Home() {

  const collections = [
    {
      title: 'Pokemon',
      img: pokemon,
      link: '/pokemon',
    },
    {
      title: 'One Piece',
      img: onepiece,
      link: '/onepiece',
    },
    {
      title: 'Demon Slayer',
      img: other,
      link: '/other',
    },
  ];

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleNavLinkClick = (e, link) => {
    e.preventDefault();

    if (link === '/onepiece') {
      setShowModal(true);
      setSelectedLink(link);
    } else {
      navigate(link);
    }
  };

  const handleModalConfirm = (link) => {
    setShowModal(false);
    navigate(link);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* {showModal && (
        <Alert onConfirm={() => handleModalConfirm('/onepiece')} onCancel={handleModalCancel} />
      )} */}

      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto mt-32">
        <div className="max-w-2xl mx-auto text-center lg:mb-14">
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              to={collection.link}
              className="group flex flex-col bg-white dark:bg-slate-700 max-h-[500px] hover:bg-slate-300 rounded-xl p-4 transition-all dark:hover:bg-white/[.05]"
            >
              <img className="w-full h-4/5 object-cover object-center rounded-xl"
                src={collection.img}
                alt={collection.title}
              />

              <h3 className="p-2 text-lg font-extrabold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {collection.title}
              </h3>
              <p className="p-2 inline-flex items-center gap-x-1 text-md font-semibold text-gray-500 dark:text-gray-200">
                View
                <svg className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home