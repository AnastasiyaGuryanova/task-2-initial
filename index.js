import './index.css';
import { LocalStorageService } from './src/LocalStorageService';   

const cookieConsentHTML = document.querySelector('.cookie-consent');
const button = cookieConsentHTML.querySelector('.cookie-consent__button');

const localStorageService = new LocalStorageService();

if (localStorageService.getItem('cookieConsent')) {
    cookieConsentHTML.style.display = 'none';
}

button.addEventListener('click', () => {
    cookieConsentHTML.style.display = 'none';
    localStorageService.setItem('cookieConsent', true);
});