import axios from "axios";

const instance=axios.create({
      baseURL:'https://event-booking-system-backend-qrny.onrender.com/api',
      timeout:150000,
});

export default instance;

