export const getPrimaryLanguage = (acceptLanguage) => {
  if (!acceptLanguage) return 'en'; // Default to 'en' if no language is provided
  return acceptLanguage.split(',')[0].split('-')[0]; // Extract primary language code
};