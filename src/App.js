import React, { useState } from "react";
import Design from "./Design";

const App = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hemisphere, setHemisphere] = useState("");

  // to find month use LazyInitialisation concept
  // to get rid of repeteadily calculation of month.

  const [month, setMonth] = useState(() => new Date().getMonth() + 1);

  function fetchLocation() {
    if (navigator.geolocation) {
      // checking, that is the "navigator" present in my browser or not.?
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        // if(latitude > 0){ // --> async func will completed later but if condition called earlier
        //     setHemisphere("Northen Hemisphere")
        // }

        if (position.coords.latitude > 0) {
          setHemisphere("Northen Hemisphere");
        } else if (latitude < 0) {
          setHemisphere("Southern Hemisphere");
        } else {
          setHemisphere("Equator");
        }
      });
    } else {
      // error statement:
    }
  }

  function reset(){
    setLatitude(0)
    setLongitude(0)
    setHemisphere("")
  }

  return (
    <div>
      <Design />
      <div className="app">

        <div className="btn">
        <button className="fetch" onClick={fetchLocation}>Fetch Location</button>
        <button className="reset" onClick={reset}>Reset</button>
        </div>

        <div className="geo">
          <h2>Latitude: {latitude}</h2>
          <h2>Longitude: {longitude}</h2>
          <h2>Hemisphere: {hemisphere}</h2>
          <h2>Month: {month}</h2>
        </div>


        <div className="season">
          {hemisphere &&
            hemisphere == "Northen Hemisphere" &&
            month >= 4 &&
            month <= 10 && (
              <div>
                <h1>Summer Season</h1>
                <img
                  src="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="summerImg"
                />
              </div>
            )}

          {hemisphere &&
            hemisphere == "Northen Hemisphere" &&
            (month < 4 || month > 10) && (
              <div>
                <h1>Winter Season</h1>
                <img
                  src="https://images.unsplash.com/photo-1489674267075-cee793167910?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww"
                  alt="winterImg"
                />
              </div>
            )}

          {hemisphere &&
            hemisphere == "Southern Hemisphere" &&
            month >= 4 &&
            month <= 10 && (
              <div>
                <h1>Winter Season</h1>
                <img
                  src="https://images.unsplash.com/photo-1489674267075-cee793167910?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyfGVufDB8fDB8fHww"
                  alt="winterImg"
                />
              </div>
            )}

          {hemisphere &&
            hemisphere == "Southern Hemisphere" &&
            (month < 4 || month > 10) && (
              <div>
                <h1>Summer Season</h1>
                <img
                  src="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="summerImg"
                />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default App;
