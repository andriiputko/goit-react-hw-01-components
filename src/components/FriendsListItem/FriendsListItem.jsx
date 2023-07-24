import cl from './FriendsListItem.module.css';
import friends from '../FriendsList/friends';
const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={cl.item} key={friends.id}>
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

export default FriendsListItem;
