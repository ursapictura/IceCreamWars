'use client';

// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { updateIceCream } from '../api/iceCream';

export default function IceCreamCard({ iceCreamObj, onUpdate }) {
  // const [likes, setLikes] = useState({});
  // const [dislikes, setDislikes] = useState({});

  const dislikeIceCream = () => {
    const payload = { ...iceCreamObj, dislikes: iceCreamObj.dislikes - 1 };
    console.warn(payload, iceCreamObj.firebaseKey);
    updateIceCream(payload).then(() => onUpdate());
  };

  const likeIceCream = () => {
    const payload = { ...iceCreamObj, likes: iceCreamObj.likes + 1 };
    console.warn(payload, iceCreamObj.firebaseKey);
    updateIceCream(payload).then(() => onUpdate());
  };

  return (
    <Card
      style={{
        width: '18rem',
      }}
      className={iceCreamObj.flavor}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', fontSize: '28px' }}>{iceCreamObj.flavor}</Card.Title>
        <Card.Body style={{ textAlign: 'center' }}>
          <h5>Likes: {iceCreamObj.likes}</h5>
          <h5>Dislikes: {iceCreamObj.dislikes}</h5>
        </Card.Body>
        <div className="button-container">
          <Button className={iceCreamObj.flavor} onClick={likeIceCream}>
            {' '}
            Like{' '}
          </Button>
          <Button className={iceCreamObj.flavor} onClick={dislikeIceCream}>
            {' '}
            Dislike{' '}
          </Button>
        </div>
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
