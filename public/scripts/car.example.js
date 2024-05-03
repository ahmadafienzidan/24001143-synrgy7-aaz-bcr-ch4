class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
    <div class="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img src="${this.image}" alt="${this.manufacture}" />
    </div>
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        ${this.manufacture} ${this.model}
      </h5>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">id: ${this.id}</p>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">plate: ${this.plate}</p>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">model: ${this.model}</p>
      <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">available at: ${this.availableAt}</p>
    </div>
    <div class="p-6 pt-0">
      <button
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        Pilih Mobil
      </button>
    </div>
  </div>
    `;
  }
}
