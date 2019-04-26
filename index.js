function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === 'liftWeights') {
    breakfast = 'protein bar';
  } else if (exercise === 'laps') {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }


  // we could give this function a name if we wanted to,
  // but since it's only available _inside_ morningRoutine(),
  // we don't need to
  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  }
}

console.log(morningRoutine('liftWeights')())
