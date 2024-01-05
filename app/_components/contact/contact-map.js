import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const ContactMap = ({ cssClasses }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBEHEWRnqpHLrFtUqs2oyORbfpvRwmdoTM",
  });
  if (!isLoaded)
    return (
      <div
        className={`border-2 bg-white border-black text-[30px] text-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        Map loading...
      </div>
    );
  return (
    <GoogleMap
      zoom={14}
      center={{ lat: -34.0627233, lng: 23.3718023 }}
      mapContainerClassName={`${cssClasses}`}
    >
      <MarkerF position={{ lat: -34.0627233, lng: 23.3718023 }} />
    </GoogleMap>
  );
};

export default ContactMap;
