import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CombinelatestComponent } from './operators/combinelatest/combinelatest.component';
import { ConcatComponent } from './operators/concat/concat.component';
import { MergeComponent } from './operators/merge/merge.component';
import { StartwithComponent } from './operators/startwith/startwith.component';
import { FromComponent } from './operators/from/from.component';
import { OfComponent } from './operators/of/of.component';
import { CatcherrorComponent } from './operators/catcherror/catcherror.component';
import { DebouncetimeComponent } from './operators/debouncetime/debouncetime.component';
import { DistinctuntilchangedComponent } from './operators/distinctuntilchanged/distinctuntilchanged.component';
import { FilterComponent } from './operators/filter/filter.component';
import { TakeComponent } from './operators/take/take.component';
import { TakeuntilComponent } from './operators/takeuntil/takeuntil.component';
import { ThrottleComponent } from './operators/throttleTime/throttleTime.component';
import { FirstComponent } from './operators/first/first.component';
import { LastComponent } from './operators/last/last.component';
import { ShareComponent } from './operators/share/share.component';
import { SharereplayComponent } from './operators/sharereplay/sharereplay.component';
import { BuffertimeComponent } from './operators/buffertime/buffertime.component';
import { ConcatmapComponent } from './operators/concatmap/concatmap.component';
import { MapComponent } from './operators/map/map.component';
import { MergemapComponent } from './operators/mergemap/mergemap.component';
import { ScanComponent } from './operators/scan/scan.component';
import { SwitchmapComponent } from './operators/switchmap/switchmap.component';
import { DoTapComponent } from './operators/do-tap/do-tap.component';
import { router } from './app.routing';
import { WithlatestfromComponent } from './operators/withlatestfrom/withlatestfrom.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinelatestComponent,
    ConcatComponent,
    MergeComponent,
    StartwithComponent,
    FromComponent,
    OfComponent,
    CatcherrorComponent,
    DebouncetimeComponent,
    DistinctuntilchangedComponent,
    FilterComponent,
    TakeComponent,
    TakeuntilComponent,
    ThrottleComponent,
    FirstComponent,
    LastComponent,
    ShareComponent,
    SharereplayComponent,
    BuffertimeComponent,
    ConcatmapComponent,
    MapComponent,
    MergemapComponent,
    ScanComponent,
    SwitchmapComponent,
    DoTapComponent,
    WithlatestfromComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
