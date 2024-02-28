import { Router } from "express";
import {
    getSession,
    getUsuarios,
    getUsuarioID,
    createUser,
    sessionStart,
    sessionFinish,
    sessionStarter,
    sessionStartUser,
    sessionRegenerate,
    sessionDestroy,
    sessionReload,
} from "../controllers/session.controller.js";

const router = Router();

router.get("/", getSession);

router.get("/get/users", getUsuarios);

router.get("/get/users/:id", getUsuarioID);

router.get("/set/user/:nombre&:apellido", createUser)

router.get("/set/user/", createUser)

router.get("/start", sessionStart);

router.get("/finish", sessionFinish);

router.get("/starter/:id", sessionStarter);

router.get("/start/user", sessionStartUser);

router.get("/destroy", sessionDestroy);

router.get("/reload", sessionReload);

router.get("/regenerate", sessionRegenerate);

export default router;
