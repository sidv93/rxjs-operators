import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CombinelatestComponent } from "./operators/combinelatest/combinelatest.component";
import { MergeComponent } from "./operators/merge/merge.component";
import { ConcatComponent } from "./operators/concat/concat.component";
import { StartwithComponent } from "./operators/startwith/startwith.component";
import { FromComponent } from "./operators/from/from.component";
import { OfComponent } from "./operators/of/of.component";
import { CatchComponent } from "./operators/catch/catch.component";
import { CatcherrorComponent } from "./operators/catcherror/catcherror.component";
import { DebouncetimeComponent } from "./operators/debouncetime/debouncetime.component";
import { DistinctuntilchangedComponent } from "./operators/distinctuntilchanged/distinctuntilchanged.component";
import { FilterComponent } from "./operators/filter/filter.component";
import { TakeComponent } from "./operators/take/take.component";
import { TakeuntilComponent } from "./operators/takeuntil/takeuntil.component";
import { ThrottleComponent } from "./operators/throttleTime/throttleTime.component";
import { ShareComponent } from "./operators/share/share.component";
import { SharereplayComponent } from "./operators/sharereplay/sharereplay.component";
import { BuffertimeComponent } from "./operators/buffertime/buffertime.component";
import { ConcatmapComponent } from "./operators/concatmap/concatmap.component";
import { MapComponent } from "./operators/map/map.component";
import { MergemapComponent } from "./operators/mergemap/mergemap.component";
import { ScanComponent } from "./operators/scan/scan.component";
import { SwitchmapComponent } from "./operators/switchmap/switchmap.component";
import { DoTapComponent } from "./operators/do-tap/do-tap.component";
import { FirstComponent } from "./operators/first/first.component";
import { LastComponent } from "./operators/last/last.component";

const routes: Routes = [
    {
        path: 'combineLatest', component: CombinelatestComponent
    },
    {
        path: 'merge', component: MergeComponent
    },
    {
        path: 'concat', component: ConcatComponent
    },
    {
        path: 'startWith', component: StartwithComponent
    },
    {
        path: 'of', component: OfComponent
    },
    {
        path: 'from', component: FromComponent
    },
    {
        path: 'catch', component: CatchComponent
    },
    {
        path: 'catchError', component: CatcherrorComponent
    },
    {
        path: 'debounceTime', component: DebouncetimeComponent
    },
    {
        path: 'distictUntilChanged', component: DistinctuntilchangedComponent
    },
    {
        path: 'filter', component: FilterComponent
    },
    {
        path: 'first', component: FirstComponent
    },
    {
        path: 'last', component: LastComponent
    },
    {
        path: 'take', component: TakeComponent
    },
    {
        path: 'takeUntil', component: TakeuntilComponent
    },
    {
        path: 'throttle', component: ThrottleComponent
    },
    {
        path: 'share', component: ShareComponent
    },
    {
        path: 'shareReplay', component: SharereplayComponent
    },
    {
        path: 'bufferTime', component: BuffertimeComponent
    },
    {
        path: 'concatMap', component: ConcatmapComponent
    },
    {
        path: 'map', component: MapComponent
    },
    {
        path: 'mergeMap', component: MergemapComponent
    },
    {
        path: 'scan', component: ScanComponent
    },
    {
        path: 'switchMap', component: SwitchmapComponent
    },
    {
        path: 'do-tap', component: DoTapComponent
    },
    {
        path: '', redirectTo: 'combineLatest', pathMatch: 'full'
    }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);