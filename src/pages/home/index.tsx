import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Page from "../../components/Page";

const Home = () => {
  const [location, setLocation] = useState<string | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude, longitude },
          } = position;

          const latlong = [latitude, longitude].join(", ");

          setLocation(latlong);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Failed to get locations",
            text: error.message,
            timer: 1500,
            showConfirmButton: false,
          });
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        titleText: "Failed to get location",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return <Page query={location || ""} />;
};

export default Home;
