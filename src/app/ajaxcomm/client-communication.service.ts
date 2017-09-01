import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ClientCommunicationService {

  constructor(private _http : Http) {}


  getLanguages() {
    return this._http.get('https://languagetool.org/api/v2/languages');
  }

  getHeadersAndParams() {
    let headers  = new Headers();
    let params = new URLSearchParams();

    let url = 'https://httpbin.org/anything';

    headers.append('pankaj','bhatt');
    headers.append('x-pankaj-token','asdasdfasdfasdfs');

    params.append('searchText','simple thing')    ;
    params.append('by','pankaj bhatt');

    let options = new RequestOptions( { headers : headers, search : params});


    return this._http.get(url,options); 

  }

}
