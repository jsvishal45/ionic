import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;

  constructor() {
    this.Woocommerce = WC({
      url: "http://selfybuk.com",
      consumerKey: "ck_0cc05daa0b3187269979d856d95118ee0e7441d4",
      consumerSecret: "cs_c893dfa80f7c8d1424c7d055c8eb52cd0979fd9b"
    });

    this.WoocommerceV2 = WC({
      url: "http://selfybuk.com",
      consumerKey: "ck_0cc05daa0b3187269979d856d95118ee0e7441d4",
      consumerSecret: "cs_c893dfa80f7c8d1424c7d055c8eb52cd0979fd9b",
      wpAPI: true,
      version: "wc/v2"
    });
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }

}
