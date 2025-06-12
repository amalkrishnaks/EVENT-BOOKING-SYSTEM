import axios from "axios";

 const instance=axios.create({
      BASE_URL:'https://event-booking-system-rfca.onrender.com/api',
      timeout:150000,
});

export default instance;

