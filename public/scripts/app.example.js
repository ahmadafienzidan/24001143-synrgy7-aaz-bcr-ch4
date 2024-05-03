import Car from "./car.example";
import Binar from "./binar";
class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.dateInput = document.getElementById("date");
    this.timeSelect = document.getElementById("time");
  }

  async init() {
    console.log(this.dateInput.value);
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.loadButton.onclick = this.searchCars;
  }

  searchCars = async () => {
    const selectedDate = this.dateInput.value;
    const selectedTime = this.timeSelect.value;
    const filterer = (car) => {
      // Filter mobil yang availableAt-nya setelah atau sama dengan tanggal dan waktu yang dipilih
      return new Date(car.availableAt) >= new Date(selectedDate + "T" + selectedTime);
    };
    // Ambil data mobil dari server atau dari cache dan terapkan filter
    const cars = await Binar.listCars(filterer);
    // Render ulang daftar mobil yang memenuhi kriteria filter
    this.run(cars);
  };

  run = (cars) => {
    cars.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = new Car(car).render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.initCars(cars);
  }

  initCars(cars) {
    this.run(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

const app = new App();
app.init();
