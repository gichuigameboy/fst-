// setAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// ✅ Step 1: Replace this with the teacher's UID you want to make admin
const uid = "Gpz15k6A6qdGeAFyC9CqkMJO6uE3";

// ✅ Step 2: Set admin role
admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`✅ Admin role set successfully for UID: ${uid}`);
    process.exit();
  })
  .catch((error) => {
    console.error("❌ Error setting admin role:", error);
    process.exit(1);
  });

