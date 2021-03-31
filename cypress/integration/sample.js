describe('test', function() {
  const urls = [
    "https://example.com",
  ]
  urls.forEach((url) => {
    it(url, function() {
      const options = {
        url: url,
      }
      cy.visit(options)

      cy.contains("a", "リンクテキスト")
        .scrollIntoView()
        .should($a => {
          expect($a).to.have.attr("href", "https://example.com");
        });
    })
  })
})
