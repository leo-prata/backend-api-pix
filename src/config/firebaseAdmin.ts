var admin = require("firebase-admin");

var serviceAccount = require("./rei-da-quadra-firebase-adminsdk-nwjiu-093abe902c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const database = admin.firestore();

export { database };
