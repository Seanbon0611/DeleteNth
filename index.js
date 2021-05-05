function deleteNth(arr, n) {
  let hashMap = {};
  return arr.filter(el => {
    hashMap[el] ? hashMap[el]++ : hashMap[el] = 1;
    return hashMap[el] <= n
  })
}

deleteNth([20, 37, 20, 21], 1)
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)