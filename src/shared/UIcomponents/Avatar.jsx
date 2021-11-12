import { motion } from 'framer-motion/dist/framer-motion.cjs';
import './Avatar.css';

const Avatar = (props) => {
  return (
      <div className='avatarWrapper'>
          <motion.img whileHover={{ scale:1.1,stiffness:600}} src={props.image} alt={props.name} className="avatar" />
      </div>
  );
};

export default Avatar;
