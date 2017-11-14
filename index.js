const driver={};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver={...driver};
  newDriver[key]='value';
  return newDriver;
}
updateDriverWithKeyAndValue(driver, 'address' , '11 Broadway');