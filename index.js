Array.zip = (...args) => {
  const lastArg = args.pop();
  const zipper = typeof lastArg === 'function'
    ? lastArg : (...args) => args;
  const arrays = typeof lastArg === 'function'
    ? args : [...args, lastArg];
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array(maxLength).fill().map((_, i) => zipper(...arrays.map(arr => arr[i])));
}
