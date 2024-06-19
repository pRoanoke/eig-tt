import 'reflect-metadata';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { typeormConnection } from "./typeorm.connection";
import {TradesController} from "./controllers/TradeController";
import {methodNotAllowed} from "./middlewares/methodNotAllowed";


routingUseContainer(Container);

const app = createExpressServer({
  controllers: [TradesController],
  middlewares: [methodNotAllowed]
});

typeormConnection.initialize()
  .then(() => {
    const port = 8000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    })
  })
  .catch((error) => console.log(error))

module.exports = app;
