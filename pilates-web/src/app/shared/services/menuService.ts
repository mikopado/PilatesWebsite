import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/login/services/authenticationService';

export class MenuItem {
    path: string;   /* The URL path to the page */
    title: string;  /* The Title of the page */
    icon?: string;  /* An optional icon for the page title */
  }
  @Injectable()
  export class MenuService{

    constructor(private router: Router) {}
       
    getMenuItems(): MenuItem[] {
        return this.router.config
          .filter(route =>
            route.data &&
            route.data.title)          
          .map(route => {
            if (!route.data.title) {
              throw new Error('Missing title for toolbar menu route ' + route.path);
            }            
            return {
              path: route.path,
              title: route.data.title,
              icon: route.data.icon
            };
          });
      }
  }