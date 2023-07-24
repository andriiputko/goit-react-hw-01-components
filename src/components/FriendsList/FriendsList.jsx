import friends from '../../data/friends';
import FriendsListItem from 'components/FriendsListItem/';
import cl from '../FriendsListItem/FriendsListItem.module.css';
import PropTypes from 'prop-types';
const FriendsList = () => {
  return (
    <ul className={cl.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsList;
