import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
    TitleCasePipe
  ],
  exports: [
    TitleCasePipe,
    TranslatePipe
  ]
})
export class SharedModule {
}
