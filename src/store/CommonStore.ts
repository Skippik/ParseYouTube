import {createContext} from 'react';
import {action, observable, makeObservable} from 'mobx';
import {User} from '../types';
import {Config} from '../Config';

class CommonStore {
  //
  words: string[] = [];
  user: User = {
    name: '',
    color: Config.themes[0].color,
  };
  //
  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoading: action.bound,
      words: observable,
      user: observable,
    });
    this.words = JSON.parse(localStorage.getItem('words') || '[]');
    this.user = JSON.parse(localStorage.getItem('user') || '[]');
  }

  loading = false;

  setWords = (newWord: string[]) => {
    this.words = newWord;

    localStorage.setItem('words', JSON.stringify(this.words));
  };

  setUser = (newUser: User) => {
    this.user = newUser;

    localStorage.setItem('user', JSON.stringify(this.user));
  };

  setLoading = (
    loading: boolean,
    color: string | null = null,
    size: number | null = null,
  ) => {
    this.loading = loading;
  };
}

export default createContext(new CommonStore());
