This is a simple project set up with **Vite**, **React**, and **TypeScript**. Below are the available commands you can run using your preferred package manager.

## Available Commands

### Development

- **`dev`**: Start the development server using Vite.
- **`test`**: Run tests using Vitest.
- **`test:coverage`**: Run tests with code coverage.
- **`lint`**: Lint the project using ESLint.
- **`build`**: Build the project with TypeScript and Vite.

## Considerations

In the sake of time a couple things weren't built, but would be improvements that I would tackle next

- **.env** - Currently the application only queries the backend to an static URL, ideally it would use the information of .env files for each enviroment
- **i18n** - Didn't have time to address any internalization tooling
- **Testing** - I focused mainly on addressing the biggest cases, with the two test files we are already at 90ish percent coverage, but definitely would be a point I would revisit
- **Routing** - Considering the simplicity of the project I didn't add any routing at this stage, but it would definitely be something I would add in a normal production app e.g. react-router
- **React-Query** - I opted to do simple requests using fetch, it all works fine, but for the corporate validation it triggers a second time once you click on submit, which isn't ideal. A solution would be to rely on tooling like react-query to cache these requests to avoid unnecessary fetching
