import { Router } from "express";
import { validatePool } from "../middleware/validatePool.js";
import {
  sendPool,
  getPool,
  getPoolChoices,
} from "../controllers/poolController.js";
const poolRouter = Router();

poolRouter.post("/pool", validatePool, sendPool);
//com isso, ele vai primeiro para avalidação, para confirmar o formato da enquete enviado, e depois vi para a função sendPool, dentro do controller, para realziar as operaçòes referentes
poolRouter.get("/pool", getPool);
//nesse caso, ele não tem validação pra fazer, por isso ele pode ir direto para os pools
poolRouter.get("/pool/choice/:id", getPoolChoices);
export default poolRouter;
