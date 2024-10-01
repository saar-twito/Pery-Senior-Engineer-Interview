import { Router } from 'express';
import axios from 'axios';
import { cache, isCached } from '../utils/cache.js';
import { users } from '../utils/user.js';
import { getPrimaryLanguage } from '../utils/language.js';

const router = Router();

// Regular expression for valid article names (only letters, numbers, hyphens, and underscores)
const validArticleNameRegex = /^[a-zA-Z0-9_-]+$/;

router.get('/introduction/:articleName', async (req, res) => {
  const { articleName } = req.params;
  const token = req.headers['x-authentication'];
  const manualLanguage = req.headers['accept-language'];

  // Check if the article name is valid
  if (!validArticleNameRegex.test(articleName)) {
    return res.status(400).json({ error: 'Invalid article name. Only letters, numbers, hyphens (-), and underscores (_) are allowed.' });
  }

  // Priority: use manual language if provided, otherwise token-based language, else default to 'en'
  let language = manualLanguage
    ? getPrimaryLanguage(manualLanguage)
    : (token && users[token] ? users[token].language : 'en');


  const cacheKey = `${language}-${articleName}`;

  // Check if the result is already cached
  const cachedResult = isCached(articleName, language);
  if (cachedResult) {
    return res.json(cachedResult);  // Return cached result
  }

  const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${articleName}`;

  try {
    const response = await axios.get(url);
    const { extract } = response.data;

    // Check if the introduction is missing or empty
    if (!extract || extract.trim() === '') {
      return res.status(404).json({
        error: `The article "${articleName}" was not found in the language "${language}".`,
      });
    }

    // Cache the result
    const result = {
      scrapeDate: Date.now(),
      articleName,
      introduction: extract,
    };
    cache[cacheKey] = result;

    // Return the result
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Invalid article name or Wikipedia not available.' });
  }
});

export default router;
