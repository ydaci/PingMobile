# VELOCIPING — Android / Capacitor

This package wraps the existing `www/index.html` game in Capacitor so it can be built as a real Android APK.

## Requirements

- Node.js 22+
- JDK 21
- Android Studio + Android SDK
- Android SDK Platform / Build Tools compatible with the Capacitor version installed

## Build the Android app

```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

On Windows PowerShell, from the project root:

```powershell
npm install
npx cap add android
npx cap sync android
cd android
.\gradlew.bat assembleDebug
```

The debug APK will normally be generated under:

`android/app/build/outputs/apk/debug/app-debug.apk`

## Open in Android Studio

```bash
npx cap open android
```

## After changing the game

Replace/update `www/index.html`, then run:

```bash
npx cap sync android
```

and rebuild the APK.

## App identity

- Name: VELOCIPING
- Application ID: `com.ydcorp.velociping`
- Version: 1.0.0

The original game is kept intact in `www/index.html`, including touch controls, localStorage leaderboard and synthesized Web Audio sounds.
