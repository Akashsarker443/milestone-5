var carObject = {
    vehicle: "car",
    imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    farePerkilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo laboriosam saepe ipsum magni !",
};

var bikeObject = {
    vehicle: "bike",
    imageUrl:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60",
    farePerkilo: 2,
    capacity: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo laboriosam saepe ipsum magni !",
};

var busObject = {
    vehicle: "bus",
    imageUrl:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    farePerkilo: 3,
    capacity: 30,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quo laboriosam saepe ipsum magni !",
};




function displayServices(service){
    const mainSection = document.getElementById('main-section');
    const stringified = JSON.stringify(service);
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${service.imageUrl}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
        <p class="card-text">${service.description}</p>
        <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerkilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>

    <button type="button" class="btn btn-primary" onclick='handleBooking(${stringified})' data-bs-toggle="modal" data-bs-target="#exampleModal">
         Book Now
    </button>
      </div>
    </div>
  </div>
</div>
    
    `
    mainSection.appendChild(div);
    console.log(service);

}

displayServices(carObject);

displayServices(busObject);
displayServices(bikeObject);




function handleBooking(obj){
    const modalBody = document.getElementById("modal-body");

    const stringified = JSON.stringify(obj);

    modalBody.innerHTML= `
    <div class="card mx-auto" style="width: 18rem;">
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text"> ${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerkilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
        <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
        <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stringified})'>Submit</button>
    </div>

    
  </div>
</div>
    
    
    `
}

function calculateCost(obj){
  console.log(obj)
}