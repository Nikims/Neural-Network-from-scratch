function activationFunction(neuron) {
  neuron.value = 1 / (1 + 2.7 ** -neuron.value);
}
flowers = JSON.parse(
  '[{"x":0.9133333333333333,"y":0.8566666666666667,"type":1},{"x":0.84,"y":0.7633333333333333,"type":1},{"x":0.73,"y":0.7633333333333333,"type":1},{"x":0.7133333333333334,"y":0.86,"type":1},{"x":0.74,"y":0.89,"type":1},{"x":0.85,"y":0.8733333333333333,"type":1},{"x":0.84,"y":0.73,"type":1},{"x":0.8,"y":0.5533333333333333,"type":1},{"x":0.68,"y":0.51,"type":1},{"x":0.54,"y":0.64,"type":1},{"x":0.5066666666666667,"y":0.81,"type":1},{"x":0.53,"y":0.92,"type":1},{"x":0.6833333333333333,"y":0.8266666666666667,"type":1},{"x":0.7033333333333334,"y":0.6266666666666667,"type":1},{"x":0.7833333333333333,"y":0.5933333333333334,"type":1},{"x":0.89,"y":0.5933333333333334,"type":1},{"x":0.94,"y":0.48333333333333334,"type":1},{"x":0.8366666666666667,"y":0.37333333333333335,"type":1},{"x":0.6866666666666666,"y":0.36333333333333334,"type":1},{"x":0.48,"y":0.43333333333333335,"type":1},{"x":0.4533333333333333,"y":0.5466666666666666,"type":1},{"x":0.3933333333333333,"y":0.8133333333333334,"type":1},{"x":0.27666666666666667,"y":0.87,"type":1},{"x":0.24,"y":0.7933333333333333,"type":1},{"x":0.39,"y":0.7033333333333334,"type":1},{"x":0.51,"y":0.72,"type":1},{"x":0.6166666666666667,"y":0.77,"type":1},{"x":0.8833333333333333,"y":0.3,"type":0},{"x":0.78,"y":0.25,"type":0},{"x":0.71,"y":0.24,"type":0},{"x":0.51,"y":0.29,"type":0},{"x":0.42,"y":0.36666666666666664,"type":0},{"x":0.36,"y":0.44,"type":0},{"x":0.32,"y":0.58,"type":0},{"x":0.28,"y":0.6766666666666666,"type":0},{"x":0.17333333333333334,"y":0.7266666666666667,"type":0},{"x":0.13,"y":0.83,"type":0},{"x":0.12666666666666668,"y":0.9366666666666666,"type":0},{"x":0.05,"y":0.8433333333333334,"type":0},{"x":0.06333333333333334,"y":0.75,"type":0},{"x":0.14,"y":0.64,"type":0},{"x":0.21,"y":0.5566666666666666,"type":0},{"x":0.22333333333333333,"y":0.47,"type":0},{"x":0.2,"y":0.36,"type":0},{"x":0.24333333333333335,"y":0.29333333333333333,"type":0},{"x":0.34,"y":0.23666666666666666,"type":0},{"x":0.5066666666666667,"y":0.20333333333333334,"type":0},{"x":0.7066666666666667,"y":0.16333333333333333,"type":0},{"x":0.7866666666666666,"y":0.16,"type":0},{"x":0.92,"y":0.08666666666666667,"type":0},{"x":0.78,"y":0.06666666666666667,"type":0},{"x":0.6533333333333333,"y":0.06,"type":0},{"x":0.5033333333333333,"y":0.09,"type":0},{"x":0.41,"y":0.12333333333333334,"type":0},{"x":0.32,"y":0.16,"type":0},{"x":0.16333333333333333,"y":0.2733333333333333,"type":0},{"x":0.15,"y":0.34,"type":0},{"x":0.13333333333333333,"y":0.52,"type":0},{"x":0.08,"y":0.5866666666666667,"type":0},{"x":0.09,"y":0.4033333333333333,"type":0},{"x":0.06,"y":0.31666666666666665,"type":1},{"x":0.08,"y":0.24666666666666667,"type":1},{"x":0.12,"y":0.2,"type":1},{"x":0.21666666666666667,"y":0.14,"type":1},{"x":0.25333333333333335,"y":0.10333333333333333,"type":1},{"x":0.32,"y":0.06,"type":1},{"x":0.26,"y":0.05,"type":1},{"x":0.20666666666666667,"y":0.05333333333333334,"type":1},{"x":0.14666666666666667,"y":0.07,"type":1},{"x":0.08,"y":0.12666666666666668,"type":1},{"x":0.05,"y":0.18,"type":1},{"x":0.03333333333333333,"y":0.16,"type":1},{"x":0.01,"y":0.04666666666666667,"type":1},{"x":0.04666666666666667,"y":0.043333333333333335,"type":1},{"x":0.1,"y":0.043333333333333335,"type":1},{"x":0.11,"y":0.06,"type":1},{"x":0.14333333333333334,"y":0.15,"type":1}]'
);
drawingGrid = [];
for (i = 0; i < 22; i++) {
  drawingGrid[i] = [];
  for (j = 0; j < drawingGrid[i].length; j++) {
    drawingGrid[i][j] = 0;
  }
}

numOfLayers = 5;
n_input = 2;
n_output = 1;

for (let i = 1; i < numOfLayers - 1; i++) {
  eval("n_hidden" + i + "=1");
}
stepSize = 0.01;
learningRate = 4;
n_hidden1 = 3;
n_hidden2 = 3;
n_hidden3 = 3;

grid = [];
for (let i = 0; i < numOfLayers; i++) {
  grid[i] = [];
}
for (let i = 1; i < numOfLayers - 1; i++) {
  for (let j = 0; j < eval("n_hidden" + i); j++) {
    grid[i][j] = { value: 0, neighbors: [], bias: Math.random() * 2 - 1 };
  }

  //   for (let j = 0; j < grid[i].length; j++) {
  //     for (let k = 0; k < grid[i - 1].length; k++) {
  //       grid[i][j].neigbors.push(grid[i - 1][k]);
  //     }
  //   }
}

for (let i = 0; i < n_input; i++) {
  grid[0][i] = { value: 0, neighbors: [], bias: 0 };
}
for (let i = 0; i < n_output; i++) {
  grid[numOfLayers - 1][i] = {
    value: 0,
    neighbors: [],
    bias: Math.random() * 2 - 1,
  };
  //   for (let k = 0; k < grid[numOfLayers - 2].length; k++) {
  //     grid[numOfLayers - 1][i].neigbors.push(grid[numOfLayers - 2][k]);
  //   }
}
for (let i = 1; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    for (let k = 0; k < grid[i - 1].length; k++) {
      grid[i][j].neighbors.push({
        neighbor: grid[i - 1][k],
        weight: Math.random() * 8 - 4,
      });
    }
  }
}
//initialize the connections
result = 0;
function runNetwork(inputs) {
  if (inputs.length > n_output) {
    for (let i = 0; i < inputs.length; i++) {
      grid[0][i].value = inputs[i];
    }
  } else {
    throw "impossible";
  }
  let result = [];
  for (i = 1; i < numOfLayers; i++) {
    for (j = 0; j < grid[i].length; j++) {
      grid[i][j].value = 0;

      for (k = 0; k < grid[i][j].neighbors.length; k++) {
        grid[i][j].value +=
          grid[i][j].neighbors[k].neighbor.value *
          grid[i][j].neighbors[k].weight;
      }
      activationFunction(grid[i][j]);
    }
  }
  for (let i = 0; i < grid[numOfLayers - 1].length; i++) {
    result[i] = grid[numOfLayers - 1][i];
  }
  return result;
}
function calculateError(dataset) {
  let result = 0;
  for (let i = 0; i < dataset.length; i++) {
    result +=
      (runNetwork([dataset[i].x, dataset[i].y])[0].value - dataset[i].type) **
      2;
  }
  return result;
}
function trainNetwork(dataset) {
  for (let k = grid.length - 1; k > 0; k--) {
    for (let m = 0; m < grid[k].length; m++) {
      for (let n = 0; n < grid[k][m].neighbors.length; n++) {
        grid[k][m].neighbors[n].weight += stepSize;
        let newResult = calculateError(dataset);
        grid[k][m].neighbors[n].weight -= stepSize;
        let oldResult = calculateError(dataset);
        steepness = newResult - oldResult;

        if (newResult < oldResult) {
          grid[k][m].neighbors[n].weight += stepSize * learningRate; //* learningRate;
        } else {
          grid[k][m].neighbors[n].weight -= stepSize * learningRate; // * learningRate;
        }
      }
    }
  }
}

function draw() {
  
  trainNetwork(flowers);
  for (let i = 0; i < 300; i += 5) {
    for (let j = 0; j < 300; j += 5) {
      context.fillStyle = `rgb(${
        runNetwork([i / 300, j / 300])[0].value * 255
      },${runNetwork([i / 300, j / 300])[0].value * 255},${
        runNetwork([i / 300, j / 300])[0].value * 255
      }`;
      context.fillRect(i, j, 5, 5);
    }
  }
  for (let i = 0; i < flowers.length; i++) {
    context.fillStyle = `rgb(${flowers[i].type * 255 - 50}, ${
      255 - flowers[i].type * 255 - 50
    }, 0)`;
    context.fillRect(flowers[i].x * 300, flowers[i].y * 300, 5, 5);
  }
}
function update() {}
