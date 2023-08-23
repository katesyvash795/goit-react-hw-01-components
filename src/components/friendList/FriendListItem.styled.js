import styled from 'styled-components';


 export const FriendListItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  Width:300px;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const StatusIndicator = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color:${props => (props.$is_online ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 16px;
`;