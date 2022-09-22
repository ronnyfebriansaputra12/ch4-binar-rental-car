class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverType = document.getElementById("tipe-driver")
    this.tgl = document.getElementById("select-tanggal")
    this.wkt = document.getElementById("select-jam")
    this.penumpang = document.getElementById("select-jml")
  }

  async init() {
    await this.load();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {

    let child = this.carContainerElement.firstElementChild

    while (child) {
      child.remove()
      child = this.carContainerElement.firstElementChild
    }

    const driver = this.driverType.value == 'Ds' ? true : false 
    

    Car.list.forEach((car) => {
      let dateTime = this.tgl.value + "T" + this.wkt.value
      let formDate = Date.parse(dateTime)
      let waktu = Date.parse(car.availableAt)
      let penumpang = this.penumpang.value
      if (car.available == driver && waktu >= formDate && car.capacity >= penumpang) {
        const node = document.createElement("div");
        node.className = 'col-md-4'
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);  
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
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
