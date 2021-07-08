function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function postRunActivity() {
  console.log('Pump iron');
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function receivesAFunction(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function Monday() {
  exerciseRoutine(liftWeights);
}

// Pilates time!
function returnsANamedFunction() {
  return swimFortyLaps();
}

function Wednesday() {
  exerciseRoutine(runFiveMiles);
}

function Thursday() {
  exerciseRoutine(liftWeights);
}

function Friday() {
  exerciseRoutine(swimFortyLaps);
}

function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is called via Anon function");
  }
}