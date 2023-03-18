import { motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Modal from "./modal/Modal";
type Props = {};

function Header({}: Props) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center p-5">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://linkedin.com/in/shaylee-meyer"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/shayleemeyer"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        </motion.div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            target="_blank"
            bgColor="transparent"
          />
          <button
            className="uppercase md:infline-flex text-sm text-gray-400 hover:underline"
            onClick={() => setShowModal(true)}
          >
            Get In Touch
          </button>
        </motion.div>
        {showModal ? <Modal onClose={onClose} /> : null}
      </header>
    </Fragment>
  );
}

export default Header;
