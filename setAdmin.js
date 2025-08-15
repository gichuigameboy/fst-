import admin from "firebase-admin";

// Download your service account key from Firebase Console
// (Project settings → Service accounts → Generate new private key)
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function makeAdmin(uid) {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log(`✅ Admin role set for: ${uid}`);
}

makeAdmin("PUT-TEACHER-UID-HERE");
