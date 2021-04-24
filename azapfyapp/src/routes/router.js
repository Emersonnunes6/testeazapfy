import { Switch, Route, BrowserRouter } from 'react-router-dom'
import PaginaDetalhes from '../pages/paginaDetalhes/paginaDetalhes'
import PaginaInicial from '../pages/paginaInicial/paginaInicial'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PaginaInicial/>
          </Route>
          <Route exact path="/:nomePais">
            <PaginaDetalhes/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Router
