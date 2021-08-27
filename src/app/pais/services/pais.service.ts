import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }


  get httpParams() {
    return new HttpParams()
    .set( 'field', 'name;capital;alpha2Code;flag;population' );

  }

  buscarPais( termino: string): Observable<Country[]> {
    
    const url:string = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams} )
  }

  buscarCapital( termino: string): Observable<Country[]> {

    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( id: string): Observable<Country> {

    const url: string = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url: string = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params: this.httpParams }); 
  }

}
