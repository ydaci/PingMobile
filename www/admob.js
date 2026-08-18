import { AdMob } from '@capacitor-community/admob';

const BANNER_AD_ID = 'ca-app-pub-7272024930398951/6496214406';
const INTERSTITIAL_AD_ID = 'ca-app-pub-7272024930398951/7905549321';

export async function initializeAdMob() {
    try {
        await AdMob.initialize({
            initializeForTesting: false
        });
    } catch (error) {
        console.error('AdMob initialization error:', error);
    }
}


// ============================================================
// BANNER
// ============================================================

export async function showBanner() {
    try {
        await AdMob.showBanner({
            adId: BANNER_AD_ID,
            adSize: 'ADAPTIVE_BANNER',
            position: 'BOTTOM_CENTER',
            margin: 0,
            isTesting: false
        });
    } catch (error) {
        console.error('Banner error:', error);
    }
}


export async function hideBanner() {
    try {
        await AdMob.hideBanner();
    } catch (error) {
        console.error('Hide banner error:', error);
    }
}


// ============================================================
// PUB GAME OVER
// ============================================================

let gameOverCount = 0;

export async function showGameOverAd() {

    gameOverCount++;

    // Une pub tous les 2 Game Over
    if (gameOverCount % 2 !== 0) {
        return;
    }

    try {

        await AdMob.prepareInterstitial({
            adId: INTERSTITIAL_AD_ID,
            isTesting: false
        });

        await AdMob.showInterstitial();

    } catch (error) {

        console.error(
            'Game Over interstitial error:',
            error
        );

    }
}


// ============================================================
// PUB ÉCRAN TITRE
// ============================================================

let titleAdCount = 0;

export async function showTitleAd() {

    titleAdCount++;

    // Une pub tous les 2 retours à l'écran titre
    if (titleAdCount % 2 !== 0) {
        return;
    }

    try {

        await AdMob.prepareInterstitial({
            adId: INTERSTITIAL_AD_ID,
            isTesting: false
        });

        await AdMob.showInterstitial();

    } catch (error) {

        console.error(
            'Title interstitial error:',
            error
        );

    }
}


// ============================================================
// BANNER ÉCRAN TITRE
// ============================================================

let titleScreenCount = 0;

export async function showTitleBanner() {

    titleScreenCount++;

    // Une fois sur deux : pas de banner
    if (titleScreenCount % 2 !== 0) {

        await hideBanner();

        return;
    }

    await showBanner();
}