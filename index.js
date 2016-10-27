#!/usr/bin/env node

(function(global) {
  console.log('aarrr');
  if(global.alert) {
    alert('aarrr');
  }
})(this);
