import React, { useState } from "react";
import "./rentalHistory.css";

const RentalHistory = () => {
  const [rentalHistory, setRentalHistory] = useState([
    { id: 1, brand: 'Toyota', price: 2500, type: 'SUV', image: 'https://www.toyotadirect.com/blogs/3084/wp-content/uploads/2019/11/avalon2.jpg', rentalPeriod: 'day' },
        { id: 2, brand: 'BMW', price: 5000, type: 'Sedan', image: 'https://a.storyblok.com/f/143588/1600x1014/9099ac5ca3/46554036-e51c-4057-aa79-a9fb4281517a_bmw-i8.jpg', rentalPeriod: 'day' },
        { id: 3, brand: 'Audi', price: 7500, type: 'SUV', image: 'https://a.storyblok.com/f/143588/1998x1266/44e0f8f1a8/0f3c1ceb-9b57-4d4e-860d-ee33a43b4d1b_audir8.jpeg/m/filters:quality(80)', rentalPeriod: 'day' },
        { id: 4, brand: 'Ford', price: 4500, type: 'Truck', image: 'https://www.topgear.com/sites/default/files/cars-car/image/2023/08/52829809390_bef1b5a3f0_k_0.jpg', rentalPeriod: 'day' },
        { id: 5, brand: 'Toyota', price: 1800, type: 'Hatchback', image: 'https://images.topgear.com.ph/topgear/images/2022/04/01/gr-corolla-6-1648781506.jpg', rentalPeriod: 'day' },
        
        // New car entries
        { id: 6, brand: 'Honda', price: 2200, type: 'Sedan', image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/honda-city-rs-primary-64af9915d0160.jpg', rentalPeriod: 'day' },
        { id: 7, brand: 'Nissan', price: 3200, type: 'SUV', image: 'https://d2v1gjawtegg5z.cloudfront.net/posts/preview_images/000/013/394/original/2021-nissan-rogue-caspian-blue-metallic-color.jpg?1720641937', rentalPeriod: 'day' },
        { id: 8, brand: 'Mitsubishi', price: 4200, type: 'SUV', image: 'https://www.mitsubishi-motors.com/en/products/img/xforce.png', rentalPeriod: 'day' },
        { id: 9, brand: 'Chevrolet', price: 3800, type: 'Sedan', image: 'https://www.usatoday.com/gcdn/media/USATODAY/GenericImages/2013/02/18/2014_chevrolet_ss_daytona-018-16_9.jpg?width=3000&height=1696&fit=crop&format=pjpg&auto=webp', rentalPeriod: 'day' },
        { id: 10, brand: 'Hyundai', price: 2800, type: 'Hatchback', image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/12/82/hyundai-accent-hatch-front-angle-high-view-870354.jpg?tr=w-510,h-340', rentalPeriod: 'day' },

        // New 10 cars added here
        { id: 11, brand: 'Kia', price: 3000, type: 'Sedan', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5U2mC582y1NYbVzeJQZBwrglfL59EfliYAs1iZKU94c-RPvFLDHBguvnLP6GRkySkA5DvKN8bxVvqqg3n3RtwpMROlPmTJvClJMKWdK3lrTxrgvU9UnU-xGT-6YTK07EWPqujEV_IGus6/s1600/2021_kia_k5_00.jpg', rentalPeriod: 'day' },
        { id: 12, brand: 'Mazda', price: 5000, type: 'SUV', image: 'https://media-assets.mazda.eu/image/upload/q_auto,f_auto/mazdauk/globalassets/cars/suv-range/centralized/desktop/the-soul-red-crystal-mazda-CX-5_driving-on-a-coastline-desktop.jpg?rnd=4a9a64', rentalPeriod: 'day' },
        { id: 13, brand: 'Mercedes-Benz', price: 10000, type: 'Sedan', image: 'https://images.topgear.com.ph/topgear/images/2021/09/29/s-class-10-1632883146.jpg', rentalPeriod: 'day' },
        { id: 14, brand: 'Volkswagen', price: 5500, type: 'Hatchback', image: 'https://www.team-bhp.com/sites/default/files/pictures2022/2022VolkswagenGolfGTI32.jpg', rentalPeriod: 'day' },
        { id: 15, brand: 'Porsche', price: 15000, type: 'Coupe', image: 'https://www.topgear.com/sites/default/files/news/image/2015/04/Large%20Image_8952.jpg', rentalPeriod: 'day' },
        
        // Additional 10 cars below
        { id: 16, brand: 'Subaru', price: 4800, type: 'SUV', image: 'https://media.ed.edmunds-media.com/subaru/outback/2025/oem/2025_subaru_outback_4dr-suv_onyx-edition-xt_fq_oem_1_1600.jpg', rentalPeriod: 'day' },
        { id: 17, brand: 'Lexus', price: 9000, type: 'Sedan', image: 'https://www.lexus.com.ph/content/dam/lexus-v3-philippines/models/sedan/es/mlp/my22/overview/mlp-overview.jpg', rentalPeriod: 'day' },
        { id: 18, brand: 'Jaguar', price: 13000, type: 'Coupe', image: 'https://cdn.motor1.com/images/mgl/o3Aq7/s1/2017-jaguar-f-type-coupe-review.webp', rentalPeriod: 'day' },
        { id: 19, brand: 'Tesla', price: 12000, type: 'SUV', image: 'https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-x-6734b3d48460d.jpg?crop=0.702xw:0.633xh;0.149xw,0.179xh&resize=2048:*', rentalPeriod: 'day' },
        { id: 20, brand: 'Chevrolet', price: 6200, type: 'Pickup', image: 'https://www.topgear.com/sites/default/files/2023/07/1-Chevrolet-Silverado.jpg', rentalPeriod: 'day' },
        
        { id: 21, brand: 'BMW', price: 8000, type: 'SUV', image: 'https://media.ed.edmunds-media.com/bmw/x5/2025/oem/2025_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_600.jpg', rentalPeriod: 'day' },
        { id: 22, brand: 'Fiat', price: 2500, type: 'Hatchback', image: 'https://www.media.stellantis.com/cache/0/c/2/3/e/0c23e969fdf38268b92f1cc08439843c2ff7268c.jpeg', rentalPeriod: 'day' },
        { id: 23, brand: 'Honda', price: 3400, type: 'Truck', image: 'https://lp-auto-assets.s3.us-east-1.amazonaws.com/23/honda/ridgeline/M3/header.jpg', rentalPeriod: 'day' },
        { id: 24, brand: 'Renault', price: 3500, type: 'Hatchback', image: 'https://ymimg1.b8cdn.com/uploads/car_model/10863/pictures/13376757/megane-rs-trophy.jpg.ximg.l_full_m.smart.jpg', rentalPeriod: 'day' },
        { id: 25, brand: 'Audi', price: 9500, type: 'Sedan', image: 'https://hips.hearstapps.com/hmg-prod/images/2024-audi-a5-sportback-102-64c921ec101a6.jpg', rentalPeriod: 'day' },
    ]);
  const [filter, setFilter] = useState("All");

  const deleteRental = (id) => {
    setRentalHistory(rentalHistory.filter((rental) => rental.id !== id));
  };

  const filteredHistory =
    filter === "All"
      ? rentalHistory
      : rentalHistory.filter((rental) => rental.status === filter);

  return (
    <div className="rental-history-container">
      <h1>Car Rental History</h1>

      <div className="filter-container">
        <label htmlFor="filter">Filter by status:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="rental-list">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((rental) => (
            <div key={rental.id} className="rental-item">
              <p>
                <strong>Car Model:</strong> {rental.carModel}
              </p>
              <p>
                <strong>Rental Period:</strong> {rental.rentalPeriod}
              </p>
              <p>
                <strong>Status:</strong> {rental.status}
              </p>
              <button
                className="delete-button"
                onClick={() => deleteRental(rental.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No rental history available.</p>
        )}
      </div>
    </div>
  );
};

export default RentalHistory;
