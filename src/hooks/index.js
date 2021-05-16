import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/utils";

export const useFirestore = (collection, type) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    if (!collection || !type) {
      return;
    }
    const unsub = async () => {
      const docRef = firestore.collection(collection).where("type", "==", type);
      const DBitems = await docRef.get();
      const documents = [];
      DBitems.forEach((item) => {
        documents.push({ id: item.id, ...item.data() });
      });
      setDocs(documents);
    };

    try {
      unsub();
    } catch (err) {
      console.log(err);
    }
  }, [collection, type]);

  return { docs };
};
export const useFirestoreDoc = (collection) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    if (!collection) {
      return;
    }
    const unsub = async () => {
      const docRef = firestore.doc(collection);
      const document = await docRef.get();
      if (document) setDoc({ id: document.id, ...document.data() });
    };

    try {
      unsub();
    } catch (err) {
      console.log(err);
    }
  }, [collection]);
  return { doc };
};

// export const useFirestore = (collection, type) => {
//   const [docs, setDocs] = useState(null);

//   useEffect(() => {
//     if (!collection || !type) {
//       return;
//     }
//     const unsub = firestore
//       .collection(collection)
//       .where("type", "==", type)
//       .onSnapshot((DBitems) => {
//         let documents = [];
//         DBitems.forEach((item) => {
//           documents.push({ id: item.id, ...item.data() });
//         });
//         setDocs(documents);
//       });

//     return () => unsub();
//   }, [collection, type]);

//   return { docs };
// };
