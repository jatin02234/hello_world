import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { EventComponent } from './observable/event/event.component';
import { HomeComponent } from './home/home.component';
import { PromicComponent } from './promic/promic.component';
import { SwitchComponent } from './switch/switch.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapOperterComponent } from './map-operter/map-operter.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { PluckComponent } from './pluck/pluck.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { RetryComponent } from './retry/retry.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { Com1Component } from './subject/com1/com1.component';
import { Com2Component } from './subject/com2/com2.component';
import { Com3Component } from './subject/com3/com3.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { FMergeMapComponent } from './f-merge-map/f-merge-map.component';
import { ConcatMapsComponent } from './concat-maps/concat-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    EventComponent,
    HomeComponent,
    PromicComponent,
    SwitchComponent,
    CustomComponent,
    MapOperterComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    ConcatMapComponent,
    FMergeMapComponent,
    ConcatMapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
 providers: [CommonService],
bootstrap: [AppComponent]
})
export class AppModule { }
