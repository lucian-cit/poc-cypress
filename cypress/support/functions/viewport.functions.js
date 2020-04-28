module.exports = {

  isMobile: function() {
    return Cypress.config('viewportWidth') < 601;
  },

  isTablet: function() {
    return Cypress.config('viewportWidth') < 992 && Cypress.config('viewportWidth') > 600;
  },

  isDesktop: function() {
    return Cypress.config('viewportWidth') > 991;
  }

}