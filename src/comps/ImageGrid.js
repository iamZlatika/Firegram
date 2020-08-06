import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectImg }) => {

  const { docs } = useFirestore('images');
  console.log(docs)
  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap"
          layout
          whileHover={{ opacity: 1 }}
          key={doc.id}
          onClick={() => setSelectImg(doc.url)}
        >
          <motion.img src={doc.url}
            alt="uploaded picture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }} />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid
