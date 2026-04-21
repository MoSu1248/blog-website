import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Home } from './app/features/home/home';
import { Blog } from './app/features/blog/blog';
import { About } from './app/features/about/about';
import { Newsletter } from './app/features/newsletter/newsletter';
import { BlogPage } from './app/features/blog-page/blog-page';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home },
      { path: 'blog', component: Blog },
      { path: 'blog/:slug', component: BlogPage },
      { path: 'about', component: About },
      { path: 'news letter', component: Newsletter },
    ]),
    provideHttpClient(),
  ],
});
