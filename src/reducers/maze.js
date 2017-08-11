import _ from 'lodash'

const mazeGenerator = (rows, columns) => {
  const map = Array(rows).fill().map(_ => Array(columns).fill().map(_ => 1));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  const go = (coords, dir) => {
    var newcoords = [coords[0] + dir[0], coords[1] + dir[1]];

    if (newcoords[0] < 0 || newcoords[0] >= rows) newcoords[0] = -1;
    if (newcoords[1] < 0 || newcoords[1] >= columns) newcoords[1] = -1;

    return newcoords;
  }

  const at = coords => map[coords[0]] ? map[coords[0]][coords[1]] : undefined;
  const set = (coords, val) => map[coords[0]][coords[1]] = val;

  var coords = [1, 1];
  var stack = [];

  main: while (true) {
    for (const dir of _.shuffle(directions)) {
      const step1 = go(coords, dir);
      const step2 = go(step1, dir);
      if ((at(step1) == 1) && (at(step2) == 1)) {
        set(step1, 0);
        set(step2, 0);
        coords = step2;
        stack.push(coords);
        continue main;
      }
    }
    if (stack.length == 0)
      break;
    coords = stack.pop();
  }

  return map;
}

export default (state = {map: []}, action) => {
  return {
    map: mazeGenerator(21, 21)
  }
}
