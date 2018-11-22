import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent } from './app.component';
import { GroupingBarService, ConditionalFormattingService, CalculatedFieldService } from '@syncfusion/ej2-angular-pivotview';
import { FieldListService } from '@syncfusion/ej2-angular-pivotview';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PivotViewModule
  ],
  providers: [ FieldListService, GroupingBarService, ConditionalFormattingService, CalculatedFieldService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
