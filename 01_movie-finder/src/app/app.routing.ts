//Modules
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Components
import { MoviesComponent } from './movies/movies.component';
import  { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: DetailsComponent }
];

//const routesToExport: ModuleWithProviders = RouterModule.forRoot(routes);;

