import admin, { ServiceAccount } from 'firebase-admin';
import { Firestore } from 'firebase-admin/firestore';
import serviceAccount from './rei-da-quadra-firebase-adminsdk-nwjiu-9747650377.json';

const app: admin.app.App = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const database: Firestore = admin.firestore(app);

export { database };
