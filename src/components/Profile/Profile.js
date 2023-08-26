import React from 'react';
import PropTypes from 'prop-types';

import {
  DivProfile,
  Avatar,
  Description,
  Text,
  ListStats,
  Items,
  Label,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <DivProfile className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Text className="name">{username}</Text>
        <Text color="gray" className="tag">
          @{tag}
        </Text>
        <Text color="gray" className="location">
          {location}
        </Text>
      </Description>

      <ListStats className="stats">
        <Items>
          <Label className="label">Followers</Label>
          <span className="quantity">{stats.followers}</span>
        </Items>
        <Items>
          <Label className="label">Views</Label>
          <span className="quantity">{stats.views}</span>
        </Items>
        <Items border="none">
          <Label className="label">Likes</Label>
          <span className="quantity">{stats.likes}</span>
        </Items>
      </ListStats>
    </DivProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
