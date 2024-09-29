import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getAllIceCream } from '../api/iceCream';

export default function ModalContent({ dayFlavor }) {
  const [iceCreams, setIceCreams] = useState([]);

  const flavor = async () => {
    const data = await getAllIceCream();
    const sortedData = data.sort((b, a) => b.likes - a.likes);
    setIceCreams(sortedData);
  };

  return (
    <>
      <Button onClick={flavor}>Trends</Button>
      <ul>
        <div>Least favorited flavors:</div>
        {iceCreams.map((i) => (
          <li> {i.flavor} </li>
        ))}
        Flavor of the day: {dayFlavor}
      </ul>
    </>
  );
}

ModalContent.propTypes = {
  dayFlavor: PropTypes.string.isRequired,
};
