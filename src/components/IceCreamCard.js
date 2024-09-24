'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export default function IceCreamCard({ iceCreamObj }) {
  return (
    <Card
      style={{
        width: '18rem',
      }}
    >
      <Card.Body>
        <Card.Title>{iceCreamObj.flavor}</Card.Title>
        <Card.Body>
          Likes: {iceCreamObj.likes} Dislikes: {iceCreamObj.dislikes}
        </Card.Body>
        <Button> Like </Button>
        <Button> Dislike </Button>
      </Card.Body>
    </Card>
  );
}

IceCreamCard.propTypes = {
  iceCreamObj: PropTypes.shape({
    flavor: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number,
  }),
}.isRequired;
