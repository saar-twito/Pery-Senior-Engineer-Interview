# Project Overview

### REST Server Creation
- Developed a REST server with a GET endpoint `/introduction/<articleName>`. This endpoint fetches the first paragraph of a specified Wikipedia article.
- Implemented input validation to ensure only valid article names (letters, hyphens, underscores, and numbers) are accepted.

### Internationalization
- Added support for the `Accept-Language` header, allowing users to request articles in different languages.

### User Preferences System
- Built a POST endpoint `/user` where users can sign up by providing a username and preferred language.
- Returned a randomly generated token for authentication purposes.

### Token-Based Authentication
- Modified the GET endpoint to check the user's token (provided via the `x-authentication` header) and used their preferred language for article retrieval if authenticated.

### Caching
- Implemented caching to return stored results for articles requested within the last 5 minutes, optimizing response times for repeat requests.

### Basic Web UI
- Developed a simple UI with two forms:
  - A signup form for users to create accounts.
  - A form to fetch article introductions, allowing users to enter article names and, optionally, their token and language.

### CI/CD Workflow
- For this project, I used **Render** for deployment and **GitHub** for version control and CI/CD.
  - The repository is connected to **Render**, which automatically deploys the server whenever new code is pushed to the main branch.
  - Automated deployment ensures continuous integration, testing, and deployment.

## Conclusion
This assignment showcases a full-stack implementation of a REST server with user authentication, multi-language support, caching, and a basic web interface, demonstrating both backend and frontend development skills.
