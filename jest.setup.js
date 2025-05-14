import '@testing-library/jest-dom/extend-expect';

const ignoredErrors = [
  /act(...) is not supported in production builds of React./,
]
const consoleError = global.console.error
global.console.error = (...args) => {
  if (!ignoredErrors.find((el) => el.test(args[0]))) {
    return consoleError(...args)
  }
}