import cl from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={cl.container} key={stats.index}>
      <div className={cl.card}>
        <img src={stats.avatar} alt="User avatar" className={cl.avatar} />
        <p className={cl.username}>{stats.username}</p>
        <p className={cl.tag}>@{stats.tag}</p>
        <p className={cl.location}>{stats.location}</p>
      </div>

      <ul className={cl.stats}>
        <li className={cl.li}>
          <span className={cl.label}>Followers</span>
          <span className={cl.quantity}>{stats.stats.followers}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Views</span>
          <span className={cl.quantity}>{stats.stats.views}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Likes</span>
          <span className={cl.quantity}>{stats.stats.likes}</span>
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
