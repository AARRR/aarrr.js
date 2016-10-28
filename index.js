#!/usr/bin/env node

(function(global) {
  console.log('aarrr');
  if(global.alert) {
    alert('aarrr');
  }
  if(global.module !== undefined)
    module.exports = 'aarrr';
})(this);
