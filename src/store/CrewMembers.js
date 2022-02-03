import {observable, action} from 'mobx';
import {createContext} from 'react';
import axios from '../utils/axios.js';

class CrewMembers {
  constructor() {}

  getMembers = async () => {
    let list = {};
    let serverWorking = true;
    await axios
      .get(`crew`)
      .then(async response => {
        console.log('response members is', response.status);
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
export const CrewMembersStore = createContext(new CrewMembers());
