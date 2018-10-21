//object literals
/*
function addressMrk(city, state) {
  //const newadress = { newCity: city, newState: state };
  const newadress = { city, state };

  console.log(newadress);
}

    city: address.city,
    state: address.state,
    country: "United States"
  };



addressMrk("New Liberty", "Iowa");
*/
function AddresMkr(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: "United States"
  };
  console.log(newAddress);
}

AddresMkr({ city: "Dallas", state: "Texas" });
