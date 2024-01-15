console.log("Added");
removeads();

function removeads() {
  var listings = document.querySelectorAll('li[aria-label^="Listing"]');
  var footerAds = document.querySelectorAll('div[class^="f2b12cf8"]');
  var propertyBannerAds = document.querySelectorAll(
    'div[aria-label^="Listing"]'
  );

  for (let i = 0; i < listings.length; i++) {
    if (
      listings[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Featured"') ||
      listings[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Elite"')
    ) {
      listings[i].setAttribute("hidden", "");
    }
  }
  for (let i = 0; i < footerAds.length; i++) {
    if (
      footerAds[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Featured"') ||
      footerAds[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Elite"')
    ) {
      footerAds[i].setAttribute("hidden", "");
    }
  }
  for (let i = 0; i < propertyBannerAds.length; i++) {
    if (
      propertyBannerAds[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Featured"') ||
      propertyBannerAds[i]
        .getElementsByTagName("article")[0]
        .getElementsByTagName("div")[0]
        .querySelector('div[aria-label^="Elite"')
    ) {
      propertyBannerAds[i].setAttribute("hidden", "");
    }
  }
}
removeads();
async function run() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      removeads();
    });
  });

  const targetElement = document.getElementsByTagName("head")[0];

  observer.observe(targetElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
}

run();
