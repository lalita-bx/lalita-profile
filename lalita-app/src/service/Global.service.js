import HttpService from './HttpService';

export default {
    getAnimeQuotes() {
        return HttpService.get('https://animechan.vercel.app/api/quotes/anime?title=Boku no Hero Academia');
    },
    getExperience() {
        return HttpService.get('https://run.mocky.io/v3/3dab2765-434c-4e6c-bf17-b7c06f874b43');
    }
};