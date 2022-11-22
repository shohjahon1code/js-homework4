const form = document.querySelector(".main__form");
const input = document.querySelector("#number");
const elFoot = document.getElementById("foot");
const elBike = document.getElementById("bike");
const elCar = document.getElementById("car");
const elPlane = document.getElementById("plane");

// avarege speeds
const footSpeed = 3.6;
const bikeSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const space = input.value;

  // foot
  const footTime = space / footSpeed;
  const footHour = Math.floor(footTime);
  const footTotalMinut = footTime - footHour;
  const footMinut = Math.floor(footTotalMinut * 60);

  // bike
  const bikeTime = space / bikeSpeed;
  const bikeHour = Math.floor(bikeTime);
  const bikeTotalMinut = bikeTime - bikeHour;
  const bikeMinut = Math.floor(bikeTotalMinut * 60);

  //car
  const carTime = space / carSpeed;
  const carHour = Math.floor(carTime);
  const carTotalMinut = carTime - carHour;
  const carMinut = Math.floor(carTotalMinut * 60);

  //plane
  const planeTime = space / planeSpeed;
  const planeHour = Math.floor(planeTime);
  const planeTotalMinut = planeTime - planeHour;
  const planeMinut = Math.floor(planeTotalMinut * 60);

  elFoot.textContent = `${footHour} soat ${footMinut} daqiqa`;
  elBike.textContent = `${bikeHour} soat ${bikeMinut} daqiqa`;
  elCar.textContent = `${carHour} soat ${carMinut} daqiqa`;
  elPlane.textContent = `${planeHour} soat ${planeMinut} daqiqa`;

  input.value = "";
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const footTime = space / footSpeed;
//   const footHour = Math.floor(footTime);
//   const footTotalMinut = footTime - footHour;
//   const footMinut = Math.floor(footTotalMinut * 60);

//   elFoot.textContent = `${footHour} soat ${footMinut}`;
// });
