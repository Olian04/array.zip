Array.zip = (...arrays) => Array(Math.max(...arrays.map(arr => arr.length))).fill().map((_, i) => arrays.map(arr => arr[i]));
