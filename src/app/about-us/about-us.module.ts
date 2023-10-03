import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import {SharedModule} from '../shared/shared.module';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';

const aboutUsRoutes: Routes = [
  {path: '', component: AboutUsComponent}
];

@NgModule({
  declarations: [
    AboutUsComponent,
    TeamMemberCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRoutes),
    SharedModule
  ]
})
export class AboutUsModule { }
