import { getApp, initializeApp } from "firebase/app";
import { connectDatabaseEmulator, Database, getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const EMULATORS_STARTED = "EMULATORS_STARTED";

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    const newapp = initializeApp(clientCredentials);

    // initializeAppCheck(newapp, {
    //   provider: new ReCaptchaV3Provider(
    //     process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_SITE_KEY as string
    //   ),

    //   // Optional argument. If true, the SDK automatically refreshes App Check
    //   // tokens as needed.
    //   isTokenAutoRefreshEnabled: true,
    // });

    console.log("APPLOG : Firebase has been init successfully");

    return newapp;
  }
}

const app = createFirebaseApp();

const db = getDatabase(app);


function startEmulators(database: Database) {
  if (!global[EMULATORS_STARTED]) {
    global[EMULATORS_STARTED] = true;

    connectDatabaseEmulator(database, "localhost", 9000);
  }
}

const storage = getStorage(app);

if (process.env.NODE_ENV === "development") {
  startEmulators(db);
}

export { db, storage };
