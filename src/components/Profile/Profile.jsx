import user from '../../data/user';
import cl from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={cl.container} key={user.index}>
      <div className={cl.card}>
        <img src={user.avatar} alt="User avatar" className={cl.avatar} />
        <p className={cl.username}>{user.username}</p>
        <p className={cl.tag}>@{user.tag}</p>
        <p className={cl.location}>{user.location}</p>
      </div>

      <ul className={cl.stats}>
        <li className={cl.li}>
          <span className={cl.label}>Followers</span>
          <span className={cl.quantity}>{user.stats.followers}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Views</span>
          <span className={cl.quantity}>{user.stats.views}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Likes</span>
          <span className={cl.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
