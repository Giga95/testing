module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./js");
  eleventyConfig.addPassthroughCopy("./php");
  eleventyConfig.addPassthroughCopy("./img");
  eleventyConfig.addPassthroughCopy("./admin");

  return {
    dir: {
      input: "./",
      output: "public",
    },
  };
};
