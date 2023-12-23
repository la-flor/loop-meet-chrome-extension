import React, { useEffect, useState } from 'react';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const UsersLocation = ({ lat, long }: { lat: string; long: string }) => {
  const [useLocation, setUseLocation] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setUseLocation(!useLocation)}>Use Location</button>
      {useLocation ? (
        <>
          <div>Lat: {lat ?? 'Unavailable'}</div>
          <div>Long: {long ?? 'Unavailable'}</div>
          <div>Your Timezone: {dayjs.tz.guess()}</div>
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
        {error && <div>Error: {error}</div>}
      </header>
    </div>
  );
};

export default Popup;
