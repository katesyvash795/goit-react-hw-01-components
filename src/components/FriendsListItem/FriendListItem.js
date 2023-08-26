import React from 'react';
import PropTypes from 'prop-types';

import {
  FriendListItemContainer,
  StatusIndicator,
  Avatar,
  FriendName,
} from './FriendListItem.styled.js';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemContainer>
      <StatusIndicator $is_online={isOnline} />
      <Avatar src={avatar} alt={`${name} avatar`} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListItemContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
