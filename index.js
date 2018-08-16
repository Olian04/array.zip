Array.zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array(maxLength).fill().map((_, i) => arrays.map(arr => arr[i]));
}
