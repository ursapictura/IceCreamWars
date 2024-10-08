const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

// const postFact = async (obj, val) => {
//   const post = await fetch(`${dbUrl}/response${val}.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   });
//   const response = post.json();
//   return response;
// }

const updateIceCream = async (payload) => {
  const patch = await fetch(`${dbUrl}/iceCream/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const response = patch.json();
  return response;
};

const getAllIceCream = async () => {
  const read = await fetch(`${dbUrl}/iceCream.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await read.json();
  return Object.values(response);
};

// const deleteFact = async (firebaseKey, val) => {
//   const del = await fetch(`${dbUrl}/response${val}/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const response = del.json();
//   return response;
// }

export { updateIceCream, getAllIceCream };
