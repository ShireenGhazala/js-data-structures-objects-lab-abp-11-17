const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver={...driver};
  newDriver[key]=value;
  return newDriver;
  return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}