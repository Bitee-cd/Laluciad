import { Component, OnInit } from '@angular/core';
import {Observable, tap} from 'rxjs';
import {DashboardService} from '../../services/dashboard.service';
import {Project} from '../../../home/models/project';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  projects$!: Observable<Project[]>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.projects$ = this.dashboardService.getConstructionProjects();
  }

  onDeleteProject(requestId?: string) {
    const confirmDelete = confirm('Are you sure you want to delete this project?');

    if (confirmDelete && requestId) {
      this.dashboardService.deleteConstructionProject({requestId})
        .pipe(tap(() => this.projects$ = this.dashboardService.getConstructionProjects()))
        .subscribe();
    }
  }
}
