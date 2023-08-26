import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendsListItem/FriendListItem';
import { FriendListContainer } from './FriendList.styled.js';
const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendListContainer>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
