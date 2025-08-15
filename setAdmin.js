// setAdmins.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// STEP 1: Add all the UIDs of the users you want to be admins
const adminUIDs = [
  "pQz4KnDBFXeWFusBONiBswNnsaj2",  // First teacher
  "Gpz15k6A6qdGeAFyC9CqkMJO6uE3",  // Second teacher
  // Add more UIDs here as needed
];

async function setAdmins() {
  for (const uid of adminUIDs) {
    try {
      await admin.auth().setCustomUserClaims(uid, { admin: true });
      console.log(`✅ Admin role set successfully for UID: ${uid}`);
    } catch (error) {
      console.error(`❌ Error setting admin role for UID ${uid}:`, error);
    }
  }
  process.exit();
}

setAdmins();
