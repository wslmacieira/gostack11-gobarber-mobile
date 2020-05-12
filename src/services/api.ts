import axios from 'axios';

/**
 * Em emulador android usar adb reverse tcp:3333 tcp:3333
 * ou o ip da sua maquina
 */
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
