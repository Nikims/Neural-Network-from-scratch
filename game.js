// flowers = JSON.parse(
//   '[{"x":83,"y":442,"value":1},{"x":168,"y":512,"value":1},{"x":258,"y":473,"value":1},{"x":159,"y":419,"value":1},{"x":284,"y":545,"value":1},{"x":50,"y":499,"value":0},{"x":41,"y":591,"value":0},{"x":133,"y":598,"value":0},{"x":269,"y":604,"value":0},{"x":347,"y":607,"value":0},{"x":161,"y":540,"value":0}]'
// );
flowers = JSON.parse(
  '[{"x":148,"y":574,"value":1},{"x":241,"y":468,"value":1},{"x":324,"y":514,"value":1},{"x":211,"y":568,"value":1},{"x":285,"y":574,"value":1},{"x":332,"y":435,"value":1},{"x":368,"y":576,"value":1},{"x":208,"y":610,"value":1},{"x":159,"y":604,"value":1},{"x":125,"y":604,"value":1},{"x":111,"y":604,"value":1},{"x":49,"y":571,"value":0},{"x":35,"y":492,"value":0},{"x":98,"y":509,"value":0},{"x":115,"y":439,"value":0},{"x":249,"y":400,"value":0},{"x":133,"y":365,"value":0},{"x":24,"y":428,"value":0},{"x":180,"y":470,"value":0},{"x":103,"y":549,"value":0},{"x":24,"y":566,"value":0},{"x":42,"y":603,"value":0},{"x":294,"y":385,"value":0},{"x":295,"y":350,"value":0}]'
);
// flowers = JSON.parse(
//   '[{"x":188,"y":529,"value":1},{"x":219,"y":529,"value":1},{"x":244,"y":531,"value":1},{"x":287,"y":535,"value":1},{"x":309,"y":563,"value":1},{"x":319,"y":586,"value":1},{"x":328,"y":610,"value":1},{"x":148,"y":536,"value":1},{"x":105,"y":539,"value":1},{"x":84,"y":542,"value":1},{"x":70,"y":542,"value":1},{"x":34,"y":538,"value":1},{"x":25,"y":541,"value":1},{"x":16,"y":567,"value":1},{"x":20,"y":574,"value":1},{"x":88,"y":564,"value":1},{"x":210,"y":565,"value":1},{"x":263,"y":579,"value":1},{"x":186,"y":593,"value":1},{"x":47,"y":611,"value":1},{"x":18,"y":606,"value":1},{"x":29,"y":490,"value":0},{"x":116,"y":468,"value":0},{"x":223,"y":490,"value":0},{"x":277,"y":505,"value":0},{"x":371,"y":542,"value":0},{"x":380,"y":601,"value":0},{"x":350,"y":569,"value":0},{"x":327,"y":528,"value":0},{"x":157,"y":493,"value":0},{"x":96,"y":506,"value":0},{"x":67,"y":486,"value":0},{"x":323,"y":491,"value":0}]'
// );
// flowers = [];
grids = [];
for (i = 0; i < 1000; i++) {
  grids[i] = [];
  for (j = 0; j < 5; j++) {
    grids[i][j] = [];
    for (k = 0; k < 5; k++) {
      grids[i][j][k] = 0;
    }
  }
}

mutationIndex = 0.0000001;
/////
grid = [];
for (i = 0; i < 5; i++) {
  grid[i] = [];
  for (j = 0; j < 5; j++) {
    grid[i][j] = 0;
  }
}

function connectNeurons(x1, y1, x2, y2) {
  grid[x1][y1].connectedTo.push(grid[x2][y2]);
}
grid[0][0] = {
  x: 0,
  y: 0,
  value: 0,
  connectedTo: [],
};
grid[0][1] = {
  x: 0,
  y: 0,
  value: 0,
  connectedTo: [],
};

grid[1][0] = {
  x: 0,
  y: 0,
  value: 0,
  connectedTo: [],
};
grid[1][1] = {
  x: 0,
  y: 0,
  value: 0,
  connectedTo: [],
};
grid[1][2] = {
  x: 0,
  y: 0,
  value: 0,
  connectedTo: [],
};

// grid[2][0] = { x: 0, y: 0, value: 0, connectedTo: [] };
// grid[2][1] = { x: 0, y: 0, value: 0, connectedTo: [] };
// grid[2][2] = { x: 0, y: 0, value: 0, connectedTo: [] };

grid[2][0] = { x: 0, y: 0, value: 0, connectedTo: [] };

function initNeurons(inputgrid) {
  for (pass = 0; pass < 2; pass++) {
    for (let i = 0; i < inputgrid.length; i++) {
      for (let j = 0; j < inputgrid[i].length; j++) {
        if (inputgrid[i][j] != 0) {
          if (pass == 0) {
            inputgrid[i][j] = {
              x: i,
              y: j,
              value: 0,
              connectedTo: [],
            };
          }

          if (pass == 1) {
            for (m = 0; m < inputgrid[i + 1].length; m++) {
              if (inputgrid[i + 1][m] != 0) {
                // connectNeurons(i, j, i + 1, m);
                inputgrid[i][j].connectedTo.push({
                  cell: inputgrid[i + 1][m],
                  weight: Math.random() * 2 - 1,
                  bias: Math.random() * 2 - 1,
                });
              }
            }
          }
        }
      }
    }
  }
}
function randomizeWeightsAndBiases(inputGrid) {
  for (let i = 0; i < inputGrid.length; i++) {
    for (j = 0; j < inputGrid[i].length; j++) {
      if (inputGrid[i][j] != 0) {
        for (k = 0; k < inputGrid[i][j].connectedTo.length; k++) {
          inputGrid[i][j].connectedTo[k].weight = Math.random() * 2 - 1;
          inputGrid[i][j].connectedTo[k].bias = Math.random() * 2 - 1;
        }
      }
    }
  }
}
function Mutate(inputGrid) {
  for (let i = 0; i < inputGrid.length; i++) {
    for (j = 0; j < inputGrid[i].length; j++) {
      if (inputGrid[i][j] != 0) {
        for (k = 0; k < inputGrid[i][j].connectedTo.length; k++) {
          let oeo = inputGrid[i][j].connectedTo[k].weight;
          inputGrid[i][j].connectedTo[k].weight += //
            /* Math.sign(Math.random() * 2 - 1) * */ Math.sign(
              Math.random() * 2 - 1
            ) *
            Math.random() *
            mutationIndex;

          thisbias = inputGrid[i][j].connectedTo[k].bias;
          inputGrid[i][j].connectedTo[k].bias +=
            Math.sign(Math.random() * 2 - 1) * Math.random() * mutationIndex;
          //  inputGrid[i][j].connectedTo[k].bias;
        }
      }
    }
  }
}
initNeurons(grid);
for (let i = 0; i < grids.length; i++) {
  grids[i] = JSON.parse(JSON.stringify(grid));
  initNeurons(grids[i]);
}
for (let i = 0; i < grids.length; i++) {
  randomizeWeightsAndBiases(grids[0]);
}
function normalizeAllValuesInGrid(inputGrid) {
  for (let i = 0; i < inputGrid.length; i++) {
    for (j = 0; j < inputGrid[i].length; j++) {
      inputGrid[i][j].value = 1 / (1 + Math.pow(2.718, -inputGrid[i][j].value));
    }
  }
}
function runBrain(inputGrid, param1, param2) {
  //synapseDepths
  for (let i = 0; i < inputGrid.length; i++) {
    for (let j = 0; j < inputGrid[i].length; j++) {
      if (inputGrid[i][j] != 0) {
        inputGrid[i][j].value = 0;
      }
    }
  }
  inputGrid[0][0].value = param1;
  inputGrid[0][1].value = param2;
  //normalizeAllValuesInGrid(inputGrid);

  for (let i = 0; i < inputGrid.length; i++) {
    if (typeof inputGrid[i + 1] !== "undefined") {
      for (let j = 0; j < inputGrid[i + 1].length; j++) {
        if (inputGrid[i][j] != 0) {
          for (k = 0; k < inputGrid[i][j].connectedTo.length; k++) {
            inputGrid[i][j].connectedTo[k].cell.value +=
              inputGrid[i][j].value * inputGrid[i][j].connectedTo[k].weight +
              inputGrid[i][j].connectedTo[k].bias;
          }
        }
      }
    }
  }
  // normalizeAllValuesInGrid(inputGrid);
  // return 1 / (1 + Math.pow(2.718, -inputGrid[3][0].value));
  return inputGrid[2][0].value;
}
//predict color based on coordinates
function testBrain(inputGrid) {
  guessPercentage = 999;

  for (let i = 0; i < flowers.length; i++) {
    result = runBrain(inputGrid, flowers[i].x / 800, flowers[i].y / 600);
    if (result > 0.5 && flowers[i].value == 1) {
      guessPercentage--;
    }
    if (result < 0.5 && flowers[i].value == 0) {
      guessPercentage--;
    }
    if (result < 0.5 && flowers[i].value == 1) {
      guessPercentage++;
    }
    if (result > 0.5 && flowers[i].value == 0) {
      guessPercentage++;
    }
  }
  return guessPercentage;
}
function transform(x, y) {}
function update() {}
function draw() {
  for (fakeMouseX = 0; fakeMouseX < 500; fakeMouseX += 10) {
    for (fakeMouseY = 300; fakeMouseY < 700; fakeMouseY += 10) {
      context.strokeRect(0, 400, 380, 230);
      if (bestPerfomer != 0) {
        if (runBrain(bestPerfomer, fakeMouseX / 800, fakeMouseY / 600) < 0.5) {
          context.fillStyle = "green";
        } else {
          context.fillStyle = "#960a00";
        }
        // context.fillStyle = `rgb(${
        //   runBrain(bestPerfomer, fakeMouseX / 800, fakeMouseY / 600) * 255
        // },${
        //   runBrain(bestPerfomer, fakeMouseX / 800, fakeMouseY / 600) * 255
        // },0)`;
        context.fillRect(fakeMouseX, fakeMouseY, 10, 10);

        // console.log(context.fillStyle);
      }
    }
  }
  for (let i = 0; i < flowers.length; i++) {
    context.fillStyle = flowers[i].value ? "#ff0000" : "#00ff00";
    context.fillRect(flowers[i].x, flowers[i].y, 10, 10);
  }
  context.fillStyle = "black";

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] != 0) {
        context.fillRect(
          grid[i][j].x * 100 + 100,
          grid[i][j].y * 100 + 100,
          10,
          10
        );
        if (grid[i][j].connectedTo.length > 0) {
          for (k = 0; k < grid[i][j].connectedTo.length; k++) {
            try {
              context.lineWidth =
                Math.abs(grids[0][i][j].connectedTo[k].weight) * 2;
              drawLine(
                i * 100 + 100,
                j * 100 + 100,
                grid[i][j].connectedTo[k].cell.x * 100 + 100,
                grid[i][j].connectedTo[k].cell.y * 100 + 100
              );
            } catch (e) {}
          }
        }
      }
    }
  }
}
function sortGrid(inputGrid, bestNumber) {
  minimumVal = 9999999;
  minimumIndex = 999999;
  sortedGrid = [];
  while (sortedGrid.length < bestNumber) {
    minimumVal = 9999999;
    minimumIndex = 999999;
    for (let i = 0; i < inputGrid.length; i++) {
      if (
        testBrain(inputGrid[i]) < minimumVal &&
        !sortedGrid.includes(inputGrid[i])
      ) {
        minimumVal = testBrain(inputGrid[i]);
        minimumIndex = i;
      }
    }
    sortedGrid.push(inputGrid[minimumIndex]);
  }
  return sortedGrid;
}
function keyup(key) {
  console.log(key);
  if (key == 81) {
    flowers.push({ x: mouseX, y: mouseY, value: 1 });
  }
  if (key == 87) {
    flowers.push({ x: mouseX, y: mouseY, value: 0 });
  }
}
bestPerfomer = 0;
smallestValue = 9999999;

lastAvg = 1000;
function train() {
  results = [];
  sum = 0;
  count = 0;
  for (let i = 0; i < grids.length; i++) {
    results[i] = testBrain(grids[i]);
    if (results[i] < smallestValue) {
      smallestValue = results[i];
      bestPerfomer = grids[i];
    }
    sum += results[i];
    count++;

    // results[i + 1] = testBrain(gridCopy);
  }
  avg = sum / count;
  passCount = 0;
  // results = results.sort();
  //  results = results.slice(0, 25);
  // newgrids = [];
  lengthgrid = grids.length;
  for (let dob = 0; dob < 3; dob++) {
    grids = sortGrid(grids, 3);
    copiedGrids = JSON.parse(JSON.stringify(grids));
    gridsToPush = 150;
    for (let i = 0; i < gridsToPush; i++) {
      grids.push(grids[Math.floor(Math.random() * grids.length)]);

      Mutate(grids[grids.length - 1]);
    }
  }

  // for (let i = 0; i < grids.length; i++) {
  //   try {
  //     if (testBrain(grids[i]) - 0.025 < lastAvg) {
  //       passCount++;
  //       for (let j = 0; j < 10; j++) {
  //         gridsToPush++;
  //       }
  //     } else {
  //       grids.splice(i, 1);
  //     }
  //   } catch (e) {}
  // }
  // for (let i = 0; i < gridsToPush; i++) {
  //   grids.push(grids[Math.floor(Math.random() * grids.length)]);
  //   Mutate(grids[grids.length - 1]);
  // }
  // grids = grids.slice(0, 500);
  // if (grids.length < 40) {
  //   for (let j = 0; j < 30; j++) {
  //     grids.push(bestPerfomer);
  //     Mutate(grids[grids.length - 1]);
  //   }
  // }
  console.log("avg " + ((999 - avg) / flowers.length) * 100 + "%");
  lastAvg = sum / count;
  console.log(passCount);
  console.log(grids.length);
}

for (let i = 0; i < 20; i++) {
  train();
}
