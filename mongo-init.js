// mongo-init.js
// This script can be used to initialize the MongoDB database with users or collections.
// Example: create an admin user

db.createUser({
  user: process.env.MONGO_ROOT_USERNAME || 'admin',
  pwd: process.env.MONGO_ROOT_PASSWORD || 'password123',
  roles: [
    {
      role: 'readWrite',
      db: process.env.MONGO_DB_NAME || 'filetransfer',
    },
  ],
}); 