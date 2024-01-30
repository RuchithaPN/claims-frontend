import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Bills } from './Bills';
import { Claims } from './Claims';

interface BillsResponse {
  premiumDue: number;
  dueDate: string;
  lastPaidDate: string;
  lateCharge: number;
  memberId: number;
  policyId: number;
}

interface ClaimStatusResponse {
  claimId: string;
  claimStatus: string;
  claimDescription: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  billResponse: BillsResponse | boolean = false;
  claimStatusResponse: ClaimStatusResponse | boolean = false;
  claim: Claims = new Claims();
  bill: Bills = new Bills();

  constructor(private http: HttpClient, private router: Router) {}



  getBill( memberId : String): Observable<Bills>{
    
     
    this.claimStatusResponse=false;
    this.billResponse=true;
    
    return this.http
      .get<Bills>( 'http://localhost:8430/member/viewbills/' + memberId);

  }

  getClaim( claimId : number) :Observable<Claims>{

    this.claimStatusResponse=true;
    this.billResponse=false;
    return this.http
      .get<Claims>( 'http://localhost:8420/claim/getclaimstatus/' + claimId);

  }


  submitClaim(inputFields: {
    policyId: number;
    policyName: String;
    policyBenefits: String;
    hospitalName: String;
    benefitsAvailed: number;
    amount: number;
  }) {
    console.log(inputFields);
    this.claimStatusResponse = true;
    return this.http
      .post<ClaimStatusResponse>( 'http://localhost:8420/claim/submitclaim', inputFields)
  }

  handleError(errorResponse: HttpErrorResponse) {
    return throwError(errorResponse.error.message);
  }
}
