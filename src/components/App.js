import user from '../user.json';
import  Profile  from './profile/profile';
import data from '../data.json'
import Statistics from './statistics/Statistics';
import friends from '../friends.json';
import FriendsList from './friendList/FriendsList';
import TransactionHistory from './transactionHystory/TransactionHistory';
import transactions from '../transactions.json';
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
