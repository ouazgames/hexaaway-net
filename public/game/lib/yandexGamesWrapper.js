class YandexGamesWrapper {
  constructor(readyCallback) {
    this.wrapperSDK = null;
    // Advertisement fields.
    this.bannerVisible = false;
    this.interstitialVisible = false;
    this.rewardedVisible = false;
    // Payments fields.
    this.wrapperPayments = null;
    this.cacheProductsData = "";
    this.cachePurchasesData = "";
    // Prefs fields.
    this.jsonContainers = runtimeData?.prefsContainerTags || [];
    this.cacheContainers = {};
    // Flags fields.
    this.flags = {};
    // Leaderboard fields.
    this.leaderboards = {};
    // Player fields.
    this.playerLogin = false;

    console.log("Wrapper initialization started.");
    const initStubSDK = () => {
      this.wrapperSDK = this.buildStubSDK();
      console.log("Stub SDK initialized safely.");
      readyCallback();
    };

    try {
      let script = document.createElement("script");
      script.src = runtimeData?.yandexGamesSDK || "";
      script.onload = () => {
        if (window.YaGames?.init) {
          window.YaGames.init()
            .then((ysdk) => {
              this.wrapperSDK = ysdk;
              readyCallback();
            })
            .catch(initStubSDK);
        } else initStubSDK();
      };
      script.onerror = initStubSDK;
      document.body.appendChild(script);
    } catch (e) {
      console.error("Wrapper initialization failed.", e);
      initStubSDK();
    }
  }

  // ==================== STUB SDK =====================
  buildStubSDK() {
    const safePublish = (ev, payload) => {
      try { application?.publishEvent?.(ev, payload); } catch (_) {}
    };
    return {
      adv: {
        getBannerAdvStatus: () => Promise.resolve({ stickyAdvIsShowing: false }),
        showBannerAdv: () => Promise.resolve(),
        hideBannerAdv: () => Promise.resolve(),
        showFullscreenAdv: ({ callbacks } = {}) => {
          setTimeout(() => { callbacks?.onOpen?.(); safePublish("OnInterstitialEvent","Begin"); },0);
          setTimeout(() => { callbacks?.onClose?.(); safePublish("OnInterstitialEvent","Close"); },0);
          return Promise.resolve();
        },
        showRewardedVideo: ({ callbacks } = {}) => {
          setTimeout(() => { callbacks?.onOpen?.(); safePublish("OnRewardedEvent","Begin"); },0);
          setTimeout(() => {
            callbacks?.onRewarded?.(); safePublish("OnRewardedEvent","Success");
            callbacks?.onClose?.(); safePublish("OnRewardedEvent","Close");
          },0);
          return Promise.resolve();
        }
      },
      getPayments: () => Promise.resolve({
        getCatalog: () => Promise.resolve([]),
        getPurchases: () => Promise.resolve([]),
        purchase: () => Promise.resolve(),
      }),
      getPlayer: () => Promise.resolve({
        getMode: () => "lite",
        getData: () => Promise.resolve({}),
        setData: () => Promise.resolve(),
        publicName: "Guest",
        getAvatarSrc: () => "",
      }),
      getLeaderboards: () => Promise.resolve({
        getLeaderboardPlayerEntry: () => Promise.reject("stub"),
        setLeaderboardScore: () => Promise.resolve(),
        getLeaderboardEntries: () => Promise.resolve({ entries: [] }),
      }),
      getFlags: () => Promise.resolve({}),
      features: { LoadingAPI:{ready:()=>{}}, GameplayAPI:{start:()=>{},stop:()=>{}} },
      environment: { i18n: { lang:"en" } },
      auth: { openAuthDialog: () => Promise.resolve() },
      feedback: { canReview: () => Promise.resolve({ value:false, reason:"stub" }), requestReview: () => Promise.resolve({ feedbackSent:false }) },
    };
  }

  // ================= ADS METHODS ====================
  isBannerVisible() { return this.bannerVisible; }
  invokeBanner() { this.bannerVisible=true; return Promise.resolve(); }
  disableBanner() { this.bannerVisible=false; return Promise.resolve(); }
  isInterstitialVisible() { return this.interstitialVisible; }
  invokeInterstitial() {
    this.interstitialVisible = true;
    application.publishEvent("OnInterstitialEvent","Begin");
    setTimeout(()=>{ this.interstitialVisible=false; application.publishEvent("OnInterstitialEvent","Close"); },0);
    return Promise.resolve();
  }
  isRewardedVisible() { return this.rewardedVisible; }
  invokeRewarded() {
    this.rewardedVisible=true;
    application.publishEvent("OnRewardedEvent","Begin");
    setTimeout(()=>{ 
      application.publishEvent("OnRewardedEvent","Success"); 
      this.rewardedVisible=false; 
      application.publishEvent("OnRewardedEvent","Close"); 
    },0);
    return Promise.resolve();
  }

  // ================= PAYMENTS METHODS ================
  resolvePayments() { return Promise.resolve(); }
  invokePurchase(tag) { application.publishEvent("OnPurchaseEvent","Success"); return Promise.resolve(tag); }
  resolveServerProducts() { return Promise.resolve([]); }
  resolveServerPurchases() { return Promise.resolve([]); }
  resolveCacheProducts() { return this.cacheProductsData; }
  resolveCachePurchases() { return this.cachePurchasesData; }

  // ================= PLAYER & SAVES ==================
  resolvePlayer() { return Promise.resolve({ getMode:()=> "lite", getData:()=>Promise.resolve({}), setData:()=>Promise.resolve() }); }
  resolveSaves() { application.publishEvent("OnResolveSaves","Success"); return Promise.resolve({}); }
  writeSaves() { application.publishEvent("OnWriteSaves","Success"); return Promise.resolve(); }
  resolveCacheSaves(tag) { return this.cacheContainers[tag]||"Empty"; }
  writeCacheSaves(tag,json) { this.cacheContainers[tag]=json; }

  // ================= LANGUAGE =======================
  resolveLanguage() { return this.wrapperSDK?.environment?.i18n?.lang || "en"; }

  // ================= ANALYTICS ======================
  gameIsReady() { this.wrapperSDK?.features?.LoadingAPI?.ready(); }
  gameplayStart() { this.wrapperSDK?.features?.GameplayAPI?.start(); }
  gameplayStop() { this.wrapperSDK?.features?.GameplayAPI?.stop(); }

  // ================= LEADERBOARDS ===================
  resolveLeaderboards() { return Promise.resolve({}); }
  getScore() { application.publishEvent("ScorePlatformEvent",0); }
  setScore() {}
  getScoreTable() { application.publishEvent("ScoreTablePlatformEvent","[]"); }

  // ================= SOCIAL ========================
  requestGameRating() { console.log("Game rating skipped."); }

  // ================= FLAGS ==========================
  resolveFlags() { return Promise.resolve({}); }
  flagsGetValue(key) { return undefined; }
  flagsHasKey(key) { return false; }

  // ================= PLAYER LOGIN ===================
  invokePlayerLogin() { application.publishEvent("LoginPlatformEvent","Success"); }
}

function initializeWrapper() {
  if(typeof window!=="undefined"){
    window.yandexGamesWrapper=new YandexGamesWrapper(()=>{ application.initialize(); });
  }
}
