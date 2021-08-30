import React from 'react';
import styled from 'styled-components';

function Dashboard(props) {
  const { handleShapeChange, usedShape, handleSupportCircle, showCircle } = props;
  return (
    <StyledDashboard>
      <ShapeSelect value={usedShape} onChange={handleShapeChange}>
        <option value={6}>Hexagon</option>
        <option value={8}>Oktogon</option>
        <option value={10}>Dekagon</option>
        <option value={12}>Dodekagon</option>
      </ShapeSelect>
      <label htmlFor="supportCircle">
        Visa stödcirkel
        <input
          type="checkbox"
          id="supportCircle"
          name="Something"
          checked={showCircle}
          onChange={handleSupportCircle}
        />
      </label>
    </StyledDashboard>
  );
}

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ShapeSelect = styled.select`
  width: 100%;
`;

export default Dashboard;