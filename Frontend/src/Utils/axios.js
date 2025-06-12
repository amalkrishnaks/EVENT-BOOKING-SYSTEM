import axios from "axios";

const instance=axios.create({
      baseURL:'https://event-booking-system-rfca.onrender.com',
      timeout:150000,
});

export default instance;

