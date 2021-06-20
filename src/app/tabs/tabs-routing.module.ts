import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      // {
      //   path: 'events',
      //   loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      // },
      {
        path: 'venues',
        children: [
          {
            path: '',
            loadChildren: () => import('../venues/venues.module').then(m => m.VenuesPageModule)
          },
          {
            path: ':venId',
            loadChildren: () => import('../venue/venue.module').then(m => m.VenuePageModule)
          }
        ]

      },
      {
        path: 'nearby',
        loadChildren: () => import('../nearby/nearby.module').then( m => m.NearbyPageModule)
      },
      // {
      //   path: 'nearby',
      //   loadChildren: () => import('src/app/nearby/nearby.module').then( m => m.NearbyPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/nearby',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/nearby',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
