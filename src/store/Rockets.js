import {observable, action} from 'mobx';
import {createContext} from 'react';
import axios from '../utils/axios.js';

class Rockets {
  constructor() {}

  getRockets = async () => {
    let list = {};
    let serverWorking = true;

    await axios
      .get(`rockets`)
      .then(async response => {
        console.log('response is', response.status);
        list = response.data;
        if (response.status === 500) {
          serverWorking = false;
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        if (response.status === 500) {
          serverWorking = false;
        }
      });
    return [list, serverWorking];
  };
}
export const RocketsStore = createContext(new Rockets());
