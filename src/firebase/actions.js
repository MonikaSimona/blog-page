import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { FIREBASE_DB } from "./index";

/**
 * Function to generate a collection to be reused in other calls
 * @param name The DB collection name
 * @returns A firestore collection with the appropriate name
 */
const generateSetDocCollection = (name) => {
  return collection(FIREBASE_DB, name);
};
/**
 * Function to generate a GET ready doc
 * @param name The DB collection name
 * @param id The item ID
 * @returns A doc reference to be used in a Get Call
 */
const generateDoc = (name, id = "") => {
  return doc(FIREBASE_DB, name, id);
};
/**
 * Function to add an item in a DB collection
 * @param name The name of the DB collection
 * @param data Data to be appended on item
 * @param id The ID of the item in the collection
 * @returns If the new item has been added/updated correctly
 */
export const addItem = (name, data, id) => {
  return new Promise((resolve, reject) => {
    data.updatedAt = Timestamp.now().toDate();
    const coll = generateSetDocCollection(name);
    console.log("coll", coll);
    setDoc(doc(coll, id || data.id), data)
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
/**
 * Function to get an Item from the DB
 * @param name The name of the DB collection
 * @param id The ID of the item in the collection
 * @returns The item
 */
export const getItem = (name, id = "") => {
  return new Promise(async (resolve, reject) => {
    try {
      const docSnap = await getDoc(generateDoc(name, id));
      if (docSnap.exists()) {
        const data = docSnap.data();
        data.id = docSnap.id;
        resolve(data);
      } else {
        reject("Didn't find the item you're looking for.");
      }
    } catch (error) {
      reject(error || "Didn't find the item you're looking for.");
    }
  });
};
/**
 * Function to get an Item array from the DB
 * @param name The name of the DB collection
 * @returns Array of items
 */
export const getItemsFromCollection = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(FIREBASE_DB, name));
      const res = await getDocs(q);
      const results = [];
      res.forEach((el) => {
        const item = el.data();
        results.push({ ...item, id: el.id });
      });
      console.log("results", results);
      if (results.length > 0) {
        resolve(results);
      } else {
        reject(
          "There has been an error loading your request. Please try again."
        );
      }
    } catch (error) {
      reject("There has been an error loading your request. Please try again.");
    }
  });
};
