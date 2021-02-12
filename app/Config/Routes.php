<?php namespace Config;

// On récupere le login de connexion caché
defined('CI_AREA_ADMIN')           || define('CI_AREA_ADMIN', getenv('app.areaAdmin'));

// Create a new instance of our RouteCollection class.
$routes = Services::routes(true);

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php'))
{
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);

/**
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
//$routes->get('/', 'Home::index'); 

/**
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php'))
{
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Custom Routes
 * --------------------------------------------------------------------
 *
 * Add this line to intercept "OPTIONS" requests
 */
// echo VENDORPATH . 'adnduweb/ci4_core/Controllers/BaseApiController.php'; exit;
// if (file_exists(VENDORPATH . 'adnduweb/ci4_core/Controllers/BaseApiController.php'))
// { 	
// 	$routes->options('(:any)', '\Adnduweb\Ci4Core\Controllers\BaseApiController::options');
// 	$routes->resource('api/customer', ['controller' =>'\Adnduweb\Ci4Front\Controllers\Api\Customer']);
// 	//print_r($routes); exit;
// }