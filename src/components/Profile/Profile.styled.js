import styled from 'styled-components';
export const DivProfile = styled.div`
   width: 300px;
   height: 350px;
   border-radius: 5px;
   padding: 0;
   border: 2px solid #9e9e9e;
   margin: 0;
   box-shadow: 5px 5px 20px 0px gray;
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   align-items: center;
   gap: 42px;
`;
export const Avatar = styled.img`
   width: 100px;
   padding: 30px;
   height: 100px;
   border-radius: 50%;
`;
export const Description = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   align-items: center;
   justify-content: center;
`;
export const Text = styled.p`
   margin: 0;
   color: ${props => {
      return props.color;
   }};
`;
export const ListStats = styled.ul`
   margin: 0;
   padding: 0;
   display: flex;
   background-color: #e0e0e0;
   list-style: none;
`;
export const Items = styled.li`
   display: flex;
   flex-direction: column;
   gap: 5px;
   border-top: 1px solid #9e9e9e;
   border-right: 1px solid #9e9e9e;
   padding: 10px;
   width: 80px;
   align-content: center;
   justify-content: center;
   flex-wrap: wrap;
   align-items: center;
   border-right: ${props => {
      return props.border;
   }};
`;
export const Label = styled.span`
   color: gray;
`;
