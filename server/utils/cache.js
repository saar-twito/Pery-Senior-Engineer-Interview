export const cache = {};  // In-memory cache for articles

// Function to check if an article is in cache and still valid
export const isCached = (articleName, language) => {
  const cacheKey = `${language}-${articleName}`;
  const cachedData = cache[cacheKey];

  if (cachedData) {
    const now = Date.now();
    const cacheAge = now - cachedData.scrapeDate;
    if (cacheAge < 300000) {  // 5 minutes in milliseconds
      return cachedData;
    }
  }

  return null;
};