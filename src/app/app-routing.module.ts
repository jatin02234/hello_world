import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapsComponent } from './concat-maps/concat-maps.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { FMergeMapComponent } from './f-merge-map/f-merge-map.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { MapOperterComponent } from './map-operter/map-operter.component';
import { CustomComponent } from './observable/custom/custom.component';
import { EventComponent } from './observable/event/event.component';
import { ObservableComponent } from './observable/observable.component';
import { PluckComponent } from './pluck/pluck.component';
import { PromicComponent } from './promic/promic.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RetryComponent } from './retry/retry.component';
import { SubjectComponent } from './subject/subject.component';
import { SwitchComponent } from './switch/switch.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'Promic',component:PromicComponent},
  { path: 'Observable',children:[
    {path: '', component:ObservableComponent},
    {path: 'Event', component:EventComponent},
    {path: 'Custom', component:CustomComponent},
  ]},
  { path:'Switch',component:SwitchComponent},
  { path: 'Map', component:MapOperterComponent},
  { path: 'Pluck', component:PluckComponent},
  { path : 'Filter', component:FilterComponent},
  { path : 'Tap', component:TapComponent},
  { path : 'Take', component:TakeComponent},
  { path :'Retry', component:RetryComponent},
  { path :'DebounceTime', component:DebounceTimeComponent},
  { path :'DistinctUntil', component:DistinctUntilChangedComponent},
  { path : 'Subject', component:SubjectComponent},
  { path : 'ReplaySubject', component:ReplaySubjectComponent},
  { path : 'AsyncSubject', component:AsyncSubjectComponent},
  { path : 'Concat', component:ConcatMapComponent},
  { path : 'mergemap', component:FMergeMapComponent},
  { path : 'concat-maps', component:ConcatMapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
