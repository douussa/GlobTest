const biEval = (x, y) => {
  if (x[1] < y[0]) {
    return [x, y];
  }

  if (x[1] >= y[0]) {

    if (x[1] >= y[1]) {
      return x;
    }
   return [x[0], y[1]];
  }
};
const foo = (tabs) => {
  const res = [];
  tabs.sort(function (a, b) {
    return a[0] - b[0];
  });
  const tmp = biEval(tabs[0], tabs[1]);

  if (typeof tmp[0] === "number") {
    res[0] = tmp;
  } else {
    tmp.forEach((val) => {
      res.push(val);
    });
  }

  for (let i = 2; i < tabs.length; i++) {
    const tmp = biEval(res[res.length - 1], tabs[i]);
    if (typeof tmp[0] === "number") {
      res[res.length - 1] = tmp;
    } else {
      res.push(tmp[1]);
    }
  }

  return res;
};
console.log(
  foo([
    [3, 6],
    [3, 4],
    [15, 20],
    [16, 17],
    [1, 4],
    [6, 10],
    [3, 6]
  ])
);
