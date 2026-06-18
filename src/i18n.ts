import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    // i18next-http-backend
    // loads translations from your server
    // https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'en',
        supportedLngs: ['en', 'vi', 'ko'],
        load: 'languageOnly',
        // chỉ phát hiện ngôn ngữ qua querystring và lựa chọn đã lưu,
        // mặc định về 'en' khi chưa có gì — đồng thời ghi nhớ lựa chọn người dùng
        detection: {
            order: ['querystring', 'localStorage'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;