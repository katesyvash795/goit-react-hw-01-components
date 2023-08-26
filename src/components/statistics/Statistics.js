import React from 'react';
import PropTypes from 'prop-types';

import {Title, Section,List,Item} from './Statistics.styled.js'

const Statistics = ({ title, stats }) => {
    return (
      <Section className="statistics">
        {title && <Title className="title">{title}</Title>}
        <List className="stat-list">
          {stats.map(stat => (
            <Item className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </Item>
          ))}
        </List>
      </Section>
    );
  };

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Statistics;  