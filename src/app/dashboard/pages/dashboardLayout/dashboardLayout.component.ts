
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  templateUrl: './dashboardLayout.component.html',
  styleUrl: './dashboardLayout.component.scss',
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() );

  // get user(){
  //   return this.authService.currentUser();
  // }

 }
