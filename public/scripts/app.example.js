// Class App
class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();
    console.log("Berhasil Async Init");
    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    console.log("SUCCESS");
    this.clear();
    const data = this.filterCar();

    data.forEach((car) => {
      console.log("BERJALAN ");
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  filterCar() {
    console.log("FILTER BERHASIL");
    let driver = document.getElementById("driver").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let passenger = document.getElementById("passenger").value;
    let dateTime = `${date}T${time}.563Z`;

    console.log(driver);
    console.log(date);
    console.log(time);
    console.log(passenger);
    console.log(dateTime);

    if (date == undefined && time == undefined) {
      alert("Masukkan Input");
      return;
    } else if (passenger >= 1) {
      return Car.list.filter((car) => car.available === true && car.availableAt != dateTime && car.capacity >= passenger);
    }
  }

  async load() {
    const cars = await Binar.listCars();
    console.log("Data Mobil:", cars); // ini buat ngecek mobil
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
