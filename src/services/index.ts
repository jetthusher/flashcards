import configureServices from "./configureServices"

export default configureServices({
  flashcards: [],
  counter: { value: 15, step: 1, min: -25, max: 25 },
})
