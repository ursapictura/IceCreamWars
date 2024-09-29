// 'use client';

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import ModalContent from '../../components/ModalContent';

// export default function FormPage() {
//   const [show, setShow] = useState(false);
//   const [flavor, setFlavor] = useState('');

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleVanilla = () => { setFlavor('vanilla') };

//   const randomFlavor = () => {
//     const flavors = ['vanilla', 'chocolate', 'lobster'];
//     const tastey = flavors[Math.floor(Math.random() * flavors.length)];

//     setFlavor(tastey);
//   };

//   return (
//     <>
//       <Button style={{ margin: "10px"}} variant="primary" onClick={handleShow}>
//         Launch modal
//       </Button>
//       {flavor}

//       <Modal
//       show={show}
//       onHide={handleClose}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Flavor rankings</Modal.Title>
//         </Modal.Header>
//         <Modal.Body><ModalContent dayFlave={flavor}/></Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleVanilla}>
//             flavatize me~
//           </Button>
//           <Button variant="primary" onClick={randomFlavor}>
//             randomize me~
//           </Button>
//           <Button onClick={() => setFlavor("")}>clear</Button> {/* ask the class how to clear the flavor */}
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// // MODAL ^^^
// ///////////////////////////////////////////////////////////////////////////////////////
// // MODAL COMPONENT DATA vvv

// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import { getAllIceCream } from '../api/iceCream';

// export default function ModalContent({ dayFlavor }) {
//   const [iceCreams, setIceCreams] = useState([]);
//   const [oppacity, setOppacity] = useState(0)

//   const flavor = async () => {
//     const data = await getAllIceCream();
//     const sortedData = data.sort((b, a) => b.likes - a.likes)
//     setIceCreams(sortedData);
//     setOppacity(.2)
//   };

// return (
//     <>
//       <Button onClick={flavor}>Trends</Button>
//       <ul>
//         <div style={{ opacity: oppacity }}>Least favorited flavors:</div>
//         {iceCreams.map((i) => (
//           <li> {i.flavor} </li>
//           ))}
//           {dayFlavor && (
//             <ul>
//               Flavor of the Day: {dayFlavor}
//               {dayFlavor === 'vanilla' ? <div>Half off a scoop of ice cream!</div> : <div>Free sprinkles!</div>}
//             </ul>
//           )}
//         </ul>
//     </>
//   );
// }

// ///////// content default
// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import { getAllIceCream } from '../api/iceCream';

// export default function ModalContent({ dayFlavor }) {
//   const [iceCreams, setIceCreams] = useState([]);

//   const flavor = async () => {
//     const data = await getAllIceCream();
//     const sortedData = data.sort((b, a) => b.likes - a.likes)
//     setIceCreams(sortedData);
//   };

// return (
//     <>
//       <Button onClick={flavor}>Trends</Button>
//       <ul>
//         <div>Least favorited flavors:</div>
//         {iceCreams.map((i) => (
//           <li> {i.flavor} </li>
//           ))}
//           Flavor of the day: {dayFlavor}
//         </ul>
//     </>
//   );
// }

// ///////// Modal Default
// 'use client'

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// export default function Page() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
// <>
//       <Button variant="primary" onClick={handleShow}>
//         Show Modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Welcome to The Modal</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
