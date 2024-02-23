import Cookies from 'universal-cookie';

export const removecookieweb=()=>{
    const Cookie = new Cookies();
    Cookie.remove('abhitodoapptoken');

}