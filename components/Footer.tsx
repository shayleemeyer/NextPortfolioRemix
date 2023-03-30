import React from "react";
import Modal from "./modal/Modal";
import { useState } from "react";

export default function Footer({}) {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <footer className=" bg-[rgb(36,36,36)] rounded-lg shadow md:items-center md:justify-between md:p-6 bottom-0 hidden md:flex ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2023 Shaylee Meyer. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              download
              href="ShayleeMeyerResume.pdf"
              className="mr-4 hover:underline md:mr-6 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </li>

          <li>
            <a
              onClick={() => setShowModal(true)}
              href="#"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
      {showModal ? <Modal onClose={onClose} /> : null}
      <div className="bg-[rgb(36,36,36)] rounded-lg shadow md:items-center md:justify-between md:p-6 bottom-0 flex md:hidden"></div>
    </div>
  );
}
