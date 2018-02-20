<?php

use Illuminate\Routing\Router;

Admin::registerAuthRoutes();

Route::group([
    'prefix'     => 'admin',
    'namespace'  => 'App\\Admin\\Controllers',
    'middleware' =>  ['web', 'admin'],
], function (Router $router) {
    $router->get('/', 'HomeController@index');
    $router->resource('/auth/menues', 'Auth\MenuController');
    $router->resource('/auth/users', 'Auth\UserController');
    $router->resource('/auth/user_roles', 'Auth\UserRoleController');
    $router->resource('/auth/user_permissions', 'Auth\UserPermissionController');
});
