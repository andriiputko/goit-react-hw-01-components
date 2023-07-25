import FriendsListItem from 'components/FriendsListItem/';
import cl from '../FriendsListItem/FriendsListItem.module.css';
import PropTypes from 'prop-types';
const FriendsList = ({ friends }) => {
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

FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
