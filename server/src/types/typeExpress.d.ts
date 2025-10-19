// typeExpress.d.ts
// import "express";
import "multer";
import "express";
// // Augment the 'express' module's Request interface
// declare module "express" {
//   // Define the new properties for the Request interface
//   interface Request {
//     user?: {
//       userId: string;
//       role: string;
//     };
//   }
// }

// declare namespace Express {
//   export interface Request {
//     user?: {
//       userId: string;
//       role: string;
//     };
//   }
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: { userId: string; role: string };
//     }
//   }
// }

// NOTE: The Multer File interface extension can stay as is,
// or you can simplify it if your multer version already defines these properties.
// However, the focus is on fixing the 'user' property error.
// The Multer namespace extension is usually correct for augmenting the File type.

declare global {
  namespace Express {
    namespace Multer {
      interface File {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        buffer: Buffer;
      }
    }
  }
}

// import "multer";

// declare global {
//   namespace Express {
//     namespace Multer {
//       interface File {
//         fieldname: string;
//         originalname: string;
//         encoding: string;
//         mimetype: string;
//         size: number;
//         buffer: Buffer;
//       }
//     }

//     interface Request {
//       user?: {
//         userId: string;
//         role: string;
//       };
//     }
//   }
// }

// declare namespace Express {
//   export interface Request {
//     user?: {
//       userId: string;
//       role: string;
//     };
//   },
// }
