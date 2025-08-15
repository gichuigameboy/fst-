// setAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// STEP 1: Replace this with the teacher's UID from Firebase Authentication
const uid = "pQz4KnDBFXeWFusBONiBswNnsaj2";

// STEP 2: Set admin role
admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`✅ Admin role set successfully for UID: ${uid}`);
    process.exit();
  })
  .catch((error) => {
    console.error("❌ Error setting admin role:", error);
    process.exit(1);
  });
