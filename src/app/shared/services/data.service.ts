import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ3NzNmZWQzNmRlMTRjOTg1YTczODk5YmI5ZmQzM2E2Y2JlNmUxN2ExYzRkZGYxMzEzNjhiYTAzZTA2MmMwNmYwMmJlNDgxZTU4ZTE1NTYyIn0.eyJhdWQiOiI5NTYiLCJqdGkiOiI0NzczZmVkMzZkZTE0Yzk4NWE3Mzg5OWJiOWZkMzNhNmNiZTZlMTdhMWM0ZGRmMTMxMzY4YmEwM2UwNjJjMDZmMDJiZTQ4MWU1OGUxNTU2MiIsImlhdCI6MTY0ODQ5MzY1OSwibmJmIjoxNjQ4NDkzNjU5LCJleHAiOjE2ODAwMjk2NTgsInN1YiI6ImMzNDkyZGE4LTIzNTQtNDMyMi05YjI1LTcyNDU5MGZmYmI5NiIsInNjb3BlcyI6WyJzaGlwcGluZy1jYWxjdWxhdGUiXX0.EcaVeeRF5yLOZbEg4u7oZkxJZsLr4fC1vqITfR185QwkRUY3SzpYf8RG6yu0JiAOPCzkekoic39mptoCZcYswBb7A7nxRDRAabCBLCGq-lkjB6XlKrbMNggISsZWho7UFzJepqW_3IPsSXfO8hlRKAMRiQSDAUkwi6NU-kfkGWS3lfaq2kIlvqBJt8uwFahqgoWQ6YoQ-tuXYoRJ3miSm0Dhx2VUXkxl5PgEraoOODTo-QimyHtMzumDR-PwFksDv8h_XhdWlpft04KQenFXm5siPNaFLu3KPF9JWgs8CP0nJXSrtokPT99YQv3Ov27xGBVcp_8A16TvRYwaE3y_3wcinAsehY-tjENMf3KHXLcZ-DbKhTkz_FBcFM1CQQYjE3KMi1NRMOVHjTVACbpoK20xi5GcoHmh-85CU-wTpYA1a-i03DnG3p0dXd2K6rp9iFlF5TUXSunJQpa09VmUmLzhYkXDntmYkWUVONtTeqVTGffWf9ZBhU9jsFE8GsWJn_-at3Hc4mkZlv4wMtreJQOK0I4bfBvnxePLDbENzEJ6RLbzsDIjV0XPQukpdaboLvlSYtRwPAP2WSiM2QVJUUy5vB4CuzqfcBuqI8VIvnT4wHzrNjQmMLZRGM3i15Fd9zTOLLFVEPE-d13_ANCNzcFrwCjrgdV1R_DsqsqSng0'

  constructor(private http: HttpClient) { }



 cep(){
  let cabecalho  = new HttpHeaders()
  cabecalho.append('token', this.token)


  let options = {
    from: {
      postal_code: '96020360'
  },
  to: { postal_code: '01018020' },
  products: [
      {
          id: 'x',
          width: '11',
          height: '17',
          length: '11',
          weight: '0.3',
          insurance_value: '10.1',
          quantity:'1'
      }
  ],
  options: {
      receipt: false,
      own_hand: false
  },
  services: '1,2,18'
  }

  return this.http.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate',options,{headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })})
 }
}
