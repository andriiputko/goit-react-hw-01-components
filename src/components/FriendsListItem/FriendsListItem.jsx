import cl from './FriendsListItem.module.css';
import PropTypes from 'prop-types';
const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={cl.item} key={id}>
      <span
        className={
          isOnline ? `${cl.status} ${cl.online}` : `${cl.status} ${cl.offline}`
        }
      >
        {isOnline}
      </span>
      <img className={cl.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={cl.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsListItem;
