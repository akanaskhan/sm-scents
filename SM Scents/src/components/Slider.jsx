function Slider(){


    const image1 = "https://plus.unsplash.com/premium_photo-1673277281977-3614760f01ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const image2 = "https://plus.unsplash.com/premium_photo-1673823666079-e3991760176c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const image3 = "https://images.unsplash.com/photo-1635796332668-78830169097d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return(
        <div className="">
        <div
  id="carouselExampleAutoplaying"
  className="carousel   slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner carousel">
    <div className="carousel-item active   ">
      <img src="/src/assets/images/Black And White Modern Fashion Sale Banner Landscape.png" className="d-block w-100" alt="..." loading="lazy" />
    </div>
    <div className="carousel-item">
      <img src="\src\assets\images\slideImage2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
  
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
   
  </button>
</div>
       
</div>
    )
}

export default Slider;