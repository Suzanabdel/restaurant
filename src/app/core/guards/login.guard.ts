import{ inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


export const loginGuard: CanActivateFn = ( _route, _state) => {
    if (!inject(AuthService).isAuthenticatedUser()) {
        return true;
    } else {
        // Redirect to the login page if the user is autjenticated 
        inject(Router).navigate(['/dashboard']);
        return false;
    }
    };