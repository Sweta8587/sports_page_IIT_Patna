import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import Event from '../../Event/EventPage';
import Facilities from '../../Facilities/Facilities';
import Rules from '../../Rules/Rules';
import Coordinator from '../../Coordinator/coordinators';
import Coaches from '../../Coaches/coaches';
import { Link } from 'react-router-dom';
import {getDataIntoFirebase, getHomePageBasketballAttribute } from '../../../../action/homePagesGamesAttributeAction';
import '../../Games/style.css'
  let handleData ;
  function fetchDataFromBackend() {
    getHomePageBasketballAttribute()
      .then((data) => {
        if (data) {
          handleData = data;
          console.log(handleData);
            // You can store the data in a variable here
            const { Coach, Coordinators, Achievements, Events } = data;
        console.log(typeof Coach);
        // Now you can access each part of the data using the variables Coach, Coordinators, Achievements, and Events
        console.log("Coach:", Coach);
        console.log("Coordinators:", Coordinators);
        console.log("Achievements:", Achievements);
        console.log("Events:", Events);
            
          // console.log("Fetched data:", data);
          // You can process the fetched data here
        } else {
          console.log("No data found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error if needed
      });
  }
  fetchDataFromBackend();
  
  const BasketballPage = () => {
    // function storeDataIntoBackend(){
    //   getDataIntoFirebase(handleData);
    // }
    // storeDataIntoBackend();
  // Call the function to fetch data from the backend
  const documentID = 'Basketball';
  return (
    <div>
      
      <Navbar/>

      <div id="content">
        <h2>Welcome to the Basketball Page!</h2>
        <p>This page is dedicated to everything basketball.</p>
        <p>Here you will find information about basketball teams, players, and upcoming events.</p>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <h3>Events</h3>
          <p>Stay updated with the latest basketball events and tournaments.</p>
          
          <button><Link to={`/basketball/events/${documentID}`}>View Events</Link></button>
        </div>
        <div className="grid-item">
          <h3>Rules</h3>
          <p>Learn about the rules and regulations of basketball.</p>
          <button><Link to={`/basketball/rules/${documentID}`}>View Rules</Link></button>
        </div>
        <div className="grid-item">
          <h3>Facilities</h3>
          <p>Explore the profiles and facilities of basketball teams.</p>
          <button><Link to={`/basketball/facilities/${documentID}`}>View Facilities</Link></button>
        </div>
        <div className="grid-item">
          <h3>Coach</h3>
          <p>Know the profiles Coach of basketball teams.</p>
          <button><Link to={`/basketball/coaches/${documentID}`}>Coachs</Link></button>
        </div>
        <div className="grid-item">
          <h3>Achievement</h3>
          <p>Explore the achievements of basketball teams.</p>
          <button>View Achievements</button>
        </div>
        <div className="grid-item">
          <h3>Coordinators</h3>
          <p>For any information coordinators.</p>
          <button><Link to={`/basketball/coordinators/${documentID}`}>Coordinators</Link></button>
        </div>
      </div>

      <div id="footer">
        <p>&copy; www.sportiitp.com.</p>
      </div>
    </div>
  );
}

export default BasketballPage;
