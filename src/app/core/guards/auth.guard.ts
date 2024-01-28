import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(AuthService).isAuthenticatedUser()){
    return true;
  }else{
inject (Router).navigate(['/login']);
  return false;
  }
};
