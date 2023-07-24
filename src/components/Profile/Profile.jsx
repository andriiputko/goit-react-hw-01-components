import user from './user.json';
import cl from './Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={cl.container} key={user.index}>
      <div className={cl.card}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={cl.avatar}
        />
        <p className={cl.username}>{user.username}</p>
        <p className={cl.tag}>@{user.tag}</p>
        <p className={cl.location}>{user.location}</p>
      </div>

      <ul className={cl.stats}>
        <li className={cl.li}>
          <span className={cl.label}>Followers</span>
          <span clasName={cl.quantity}>{user.stats.followers}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Views</span>
          <span clasName={cl.quantity}>{user.stats.views}</span>
        </li>
        <li className={cl.li}>
          <span className={cl.label}>Likes</span>
          <span className={cl.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
