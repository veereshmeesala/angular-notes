import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';
import { FormsComponent } from './forms/forms.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';

const routes: Routes = [
    { path: 'angular', 
      component: AngularComponent,
      children: [
        { path: '', component: FormsComponent},
        { path: 'forms', component: FormsComponent},
        { path: 'navigationandrouting', component: NavigationPageComponent}
      ]
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        AngularComponent,
        FormsComponent,
        NavigationPageComponent
    ]
})
export class AngularrModule {}


