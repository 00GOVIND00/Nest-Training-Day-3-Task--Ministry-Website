import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Ministers } from './pages/ministers/ministers';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path:'ministers', component: Ministers
    },
    {
        path: "about", component: About
    },
    {path:'contact', component:Contact}
];
