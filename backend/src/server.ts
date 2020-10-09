import { App } from "./app";

const port = process.env.PORT || 3535;
App.listen(port, () => {
    console.log(`Servidor online em: http://localhost:${port}`);
});