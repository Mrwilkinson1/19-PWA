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
console.error('putDb not implemented');     
// Connection
const jateDb = await openDB('jate', 1);
// Open obejct
const store = tx.objectStore('jate');
const tx = jateDb.transaction('jate', 'readwrite');
const request = store.put({ jate: content })
// confirm
const result = await request
console.log('Data saved to data base', results);
}
  
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const jateDb = await openDB('jate',1)
const tx = jateDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
// Get all data in DB
const request = store.getAll()
// Confirm results
const result = await request;
console.log(result)

};

initdb();
