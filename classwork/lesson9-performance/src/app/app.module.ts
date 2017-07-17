import { Observable } from 'rxjs/Observable';
import { Route, RouterModule, Routes, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
    data: { nopreload: false } }
];

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<boolean>): Observable<boolean> {
    if(route.data && route.data['nopreload']){
       return Observable.of(false);
    }
    return Observable.of(true).delay(5000);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
- CD + onPush Stategy
- Lazy Loading + Preloading
- AOT
- SSR
*/


