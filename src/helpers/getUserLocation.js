/**
 * Attempts to retrieve the user's current geographical location using the Geolocation API.
 * This function checks if geolocation is available in the user's browser and requests permission to access the user's location.
 * Upon successful retrieval, the latitude and longitude are stored in local storage.
 *
 * @returns {undefined} This function does not explicitly return a value. Instead, it stores the user's location in local storage.
 */
export const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem(
          "userLocation",
          JSON.stringify({ latitude, longitude })
        );
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
