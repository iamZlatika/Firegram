import React from 'react';
import { motion } from 'framer-motion'

const Modal = ({ selectImg, setSelectImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop'))
      setSelectImg(null)
  }

  return (
    <motion.div className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectImg} 
      alt="pic"
      initial ={{y: "-100vh"}}
      animate={{y: 0}} />
    </motion.div>
  )
}

export default Modal
