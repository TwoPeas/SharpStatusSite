const { DateTime }  = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('entryDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('LLLL d, y');
  });

  eleventyConfig.addPassthroughCopy("./src/robots.txt")
  eleventyConfig.addWatchTarget('./src/css')
  eleventyConfig.addWatchTarget('./tailwind.config.js')

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
