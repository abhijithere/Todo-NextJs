import Cookies from 'universal-cookie';

export const setcookieweb=(mytoken)=>{
    const Cookie = new Cookies();

    Cookie.set("abhitodoapptoken",mytoken,{
        maxAge: 15 * 24 * 60 * 60 * 1000 ,
      });

}