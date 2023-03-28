import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // connect to the database and version
  // create a transaction and privelages
  // open the object store
  // add the content to the database
  // confirm the content was added
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // connect to the database and version
  // create a transaction and privelages
  // open the object store
  // get all the content from the database
  // return the content
}

initdb();
