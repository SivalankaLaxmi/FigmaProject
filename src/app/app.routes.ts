import { Routes } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdatelistComponent } from './updatelist/updatelist.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {path:'our-story', component: OurStoryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'contactlist', component: ContactListComponent},
    {path: 'update/:id', component: UpdatelistComponent},
    {path: 'content', component: ContentComponent}
];
