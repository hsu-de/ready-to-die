import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

import Scratch from "../components/Scratch";
import IMG from "../assets/img_002.jpg";

const QuaQuaPage = () => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col size-full justify-center items-center space-y-8">
      <motion.button
        className=" border rounded-md px-4 py-2 font-bold"
        whileHover={{ scale: 1.1, backgroundColor: "#aeb6bf", color: "#000" }}
        whileTap={{ scale: 0.9 }}
        // transition={{ type: "spring", stiffness: 500 }}
        onClick={handleOpenModal}
      >
        New One
      </motion.button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Scratch>
            <Scratch.Area
              width={320}
              height={226}
              image={IMG}
              finishPercent={40}
              onComplete={() => console.log("complete")}
              brushSize={20}
            >
              <div className="flex size-full items-center justify-center bg-gray-400 bg-opacity-10">
                <h1 className="text-center font-bold">
                  沒有，不可能中獎的
                  <br />
                  笑死
                </h1>
              </div>
            </Scratch.Area>
          </Scratch>
        </Modal>
      )}
    </div>
  );
};

export default QuaQuaPage;
