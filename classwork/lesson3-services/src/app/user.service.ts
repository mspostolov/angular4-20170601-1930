import { Injectable, Inject } from '@angular/core';


@Injectable()
export class UserService {

  constructor(@Inject('API_URL') API_URL) { }

}

//@Component
//@Directive
//@Pipe
//@Injectable()