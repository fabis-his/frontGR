import { Routes } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { VitimologiaComponent } from './component/vitimologia/vitimologia.component';
import { ListagemComponent } from './component/listagem/listagem.component';
import { ApvitimologiaComponent } from './component/apvitimologia/apvitimologia.component';

export const routes: Routes = [
    {path: '', component:SidebarComponent,
        children: [
            {path: 'home', component:HomeComponent},
            {path: 'vitimologia', component: VitimologiaComponent},
            {path: 'listagem', component: ListagemComponent},
            {path: 'apvitimologia', component: ApvitimologiaComponent}
        ]

    }

];



