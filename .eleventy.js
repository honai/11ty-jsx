module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  return {
    dir: {
      input: 'transpiled'
    }
  }
}
