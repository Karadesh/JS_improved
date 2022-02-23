import Cart from './Cart.js'
import Catalog from './Catalog.js';
import CatalogPresenter from './CatalogPresenter.js';

const API_URL = '/api/v1'

const cartModel = new Cart();
const catalogModel = new Catalog(API_URL, cartModel);

const catalogPresenter = new CatalogPresenter(catalogModel, cartModel)

cartModel.init();
catalogModel.init();