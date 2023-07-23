import friends from './friends';
import FriendsListItem from 'components/FriendsListItem/';

const FriendsList = () => {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
};

export default FriendsList;
