import "reflect-metadata";
import * as cors from 'cors';
import * as express from 'express'
import { Request, Response } from "express"
import * as bodyParser from 'body-parser'
import { createConnection } from "typeorm";

import { Routes } from './routes'

createConnection().then(async connection => {

    const app = express();
    app.use(cors()) 
    app.use(bodyParser.json());

    Routes.forEach(route => { 
        (app as any)[route.method](route.route, (req: Request, res: Response) => { 
            const result = (new (route.controller as any))[route.action](req, res); 
            if (result instanceof Promise) { 
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined); 
            } else if (result !== null && result !== undefined) { 
                bodyParser.json(result); 
            } 
        }); 
    });

    app.listen(3333)

    console.log("Express server has started on port 3333. Open http://localhost:3333/entity to see results");

}).catch(error => console.log(error));
