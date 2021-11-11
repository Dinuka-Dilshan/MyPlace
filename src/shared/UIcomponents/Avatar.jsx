import './Avatar.css';

const Avatar = (props) => {
  return (
      <div className='avatarWrapper'>
          <img src={props.image} alt={props.name} className="avatar" />
      </div>
  );
};

export default Avatar;
