const eleventySass = require("eleventy-sass");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/assets/favicon");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/icons");
  eleventyConfig.addPassthroughCopy("src/assets/files");
  eleventyConfig.addPassthroughCopy("src/scripts");
  return { dir: { input: "src", output: "dist" } };
};
