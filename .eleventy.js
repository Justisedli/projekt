module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka je: _site
  // Zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
    // ...necháme, co už v konfiguraci je, a přidáme:
    return {
      dir: {
        input: "src",        // Složka se zdrojovými soubory
        output: "_site"    // Výstupní složka
      },
      // možné formáty šablon
      templateFormats: ["njk", "html", "md"],
      // jako šablonovací jazyk zvolíme Nunjucks`
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    }
  
 };
 