import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})
export class SharedModule {
}
