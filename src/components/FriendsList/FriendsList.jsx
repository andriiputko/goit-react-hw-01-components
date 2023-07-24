import friends from './friends';
import FriendsListItem from 'components/FriendsListItem/';
import cl from '../FriendsListItem/FriendsListItem.module.css';
const FriendsList = () => {
  return (
    <ul className={cl.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={friends.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
