/**
 * Asked by Facebook. 
 * Given multiple JS setTimeout calls, implement a helper func
 * that clears all timeouts
 */

// Given ...
let id = setTimeout(callback, delay);
clearTimeout(id);

setTimeout(callback, delay);
setTimeout(callback, delay);
setTimeout(callback, delay);


// implement clearAllTimeout();

const originalSetTimeout = setTimeout;
let timeoutIds = [];

setTimeout = (callback, delay) => {
    timeoutIds.push(originalSetTimeout(callback, delay));
}

const clearAllTimeout = () => {
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];
}