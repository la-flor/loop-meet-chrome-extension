import React, { useEffect, useState } from 'react';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const UsersLocation = ({ lat, long }: { lat: string; long: string }) => {
  const [useLocation, setUseLocation] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setUseLocation(!useLocation)}>Use Location</button>
      {useLocation ? (
        <>
          <div>Lat: {lat ?? 'Unavailable'}</div>
          <div>Long: {long ?? 'Unavailable'}</div>
        </>
      ) : null}
    </div>
  );
};

const Popup = () => {
  const [lat, setLat] = useState<string>('');
  const [long, setLong] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { coords } = location;
        const { latitude, longitude } = coords;

        setLat(latitude.toString());
        setLong(longitude.toString());
      },
      (err) => {
        setError('Unable to get current position');
        console.error(err);
      }
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Loop-Meet</h1>
        {lat && long && !error && <UsersLocation lat={lat} long={long} />}
        <div>Error: {error}</div>
      </header>
    </div>
  );
};

export default Popup;
