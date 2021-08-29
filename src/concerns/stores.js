import { writable } from 'svelte/store';

export const accessToken = writable(localStorage.getItem('accessToken'));
export const authURL = writable(localStorage.getItem('auth-url'));
