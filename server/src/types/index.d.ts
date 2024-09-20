<<<<<<< HEAD
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}
=======
declare namespace Express {
    interface Request {
        user: {
            id: string;
        };
    }
}
>>>>>>> main
