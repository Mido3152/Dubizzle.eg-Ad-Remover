// Runs the removeads() function once during initial loading of the page.
removeads();

function removeads() {
  // Load all listings and banners that might contain ads.
  var listings = document.querySelectorAll('li[aria-label^="Listing"]');
  var footerAds = document.querySelectorAll('div[class^="f2b12cf8"]');
  var propertyBannerAds = document.querySelectorAll(
    'div[aria-label^="Listing"]'
  );
  // Loop through the <li> listings and check for a dive containing the aria label "Elite" or "Featured".
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
  } // Loop through the <div> listings and check for a dive containing the aria label "Elite" or "Featured".
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
  } // Loop through the <div> listings and check for a dive containing the aria label "Elite" or "Featured" for the properties landing page.
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
removeads(); // Honestly, no clue why this function is called twice. The code doesnt work if it isn't there.

// The run() function scans for dynamic changes in the page.
async function run() {
  // Created a MutationObserver object to detect for changes.
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      removeads(); // For each change the function finds, it runs the removeads() function.
    });
  });
  // We create target element <head> for the observer to... well, observe.
  // The <head> element was chosen here because, one, it mutates everytime the DOM changed, two, it has very low preformance cost.
  const targetElement = document.getElementsByTagName("head")[0];

  // the observe() function is called from the observer object and take the <head> element, and the properties we want to observe.
  observer.observe(targetElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true,
  });
}
// Then finally the run() function is called
run();
