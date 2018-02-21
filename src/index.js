/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let numOfTriangles = 0;

  for (let i = 0; i < preferences.length - 2; i++) { 
    for (let j = i+1; j < preferences.length - 1; j++) {
      for (let k = j+1; k < preferences.length; k++) {
        let triangleOneExists = +((preferences[i] == j + 1) && (preferences[j] == k + 1) && (preferences[k] == i + 1));
        let triangleTwoExists = +((preferences[i] == k + 1) && (preferences[k] == j + 1) && (preferences[j] == i + 1));

        numOfTriangles += (triangleOneExists + triangleTwoExists);
      }
    }
  }

  return numOfTriangles;
};
