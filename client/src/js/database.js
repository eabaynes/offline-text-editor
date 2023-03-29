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

export const putDb = async (content) => {
  // connect to the database and version
  const JATEdb = await openDB('jate', 1);
  // create a transaction and privelages
  const tx = JATEdb.transaction('jate', 'readwrite');
  // open the object store
  const store = tx.objectStore('jate');
  // add the content to the database
  const req = store.add(content);
  // confirm the content was added
  const result = await req;
  // return the result
  console.log('content added to database', result);
};

export const getDb = async () => {
  // connect to the database and version
  const JATEdb = await openDB('jate', 1);
  // create a transaction and privelages
  const tx = JATEdb.transaction('jate', 'readonly');
  // open the object store
  const store = tx.objectStore('jate');
  // get all the content from the database
  const content = await store.getAll();
  // return the content
  const result = await content;
  console.log('content retrieved from database', result);
  // return the value of the result
  return result.value;
}

initdb();
