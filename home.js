(function() {
  window.addEventListener('load', init);
  function init() {
    qs('.welcome-button').addEventListener('click', start);
  }

  function start() {
    id('wrapper').classList.add('hidden');
    id('whole').classList.remove('hidden');
  }

  /**
  * Returns the array of elements that match the given CSS selector.
  * @param {string} selector - CSS query selector
  * @returns {object[]} array of DOM objects matching the query (empty if none).
  */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector string.
   * @returns {object} first element matching the selector in the DOM tree (null if none)
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
 * Returns the element that has the ID attribute with the specified value.
 * @param {string} idName - element ID
 * @returns {object} DOM object associated with id (null if none).
 */
  function id(idName) {
    return document.getElementById(idName);
  }
})();