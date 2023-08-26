import styled from 'styled-components';
export const Table = styled.table`
  width: 300px;
  border-collapse: collapse;
`;
export const TableHeader = styled.th`
  background-color: blue;
  color: white;
  padding: 8px;
`;
export const TableRow = styled.tr`
  background-color: ${props => (props.$even ? '#f2f2f2' : 'white')};
`;
export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;
