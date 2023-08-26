import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json'

import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendList/FriendsList';
import TransactionHistory from './TransactionHystory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
