<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;
use CodeIgniter\Filters\CSRF;
use CodeIgniter\Filters\DebugToolbar;
use CodeIgniter\Filters\Honeypot;
use \Adnduweb\Ci4Admin\Filters\LoginFilter;
use \Adnduweb\Ci4Admin\Filters\RoleFilter;
use \Adnduweb\Ci4Admin\Filters\PermissionFilter;
use \Adnduweb\Ci4Core\Filters\CorsFilter;

class Filters extends BaseConfig
{
	/**
	 * Configures aliases for Filter classes to
	 * make reading things nicer and simpler.
	 *
	 * @var array
	 */
	public $aliases = [
		'csrf'       => CSRF::class,
		'toolbar'    => DebugToolbar::class,
		'honeypot'   => Honeypot::class,
		'login'      => LoginFilter::class,        // Applicate Route
		'role'       => RoleFilter::class,         // Applicate Route
		'permission' => PermissionFilter::class,   // Applicate Route
		'cors'       => CorsFilter::class,
	];

	/**
	 * List of filter aliases that are always
	 * applied before and after every request.
	 *
	 * @var array
	 */
	public $globals = [
		'before' => [
			// 'honeypot',
			'csrf' => ['except' => [CI_AREA_ADMIN.'/login', '/'.CI_AREA_ADMIN.'/international/translate/searchTexte', '/'.CI_AREA_ADMIN.'/medias/*', '/'.CI_AREA_ADMIN.'/ajax/*']],
		],
		'after'  => [
			'toolbar',
			// 'honeypot',
		],
	];

	/**
	 * List of filter aliases that works on a
	 * particular HTTP method (GET, POST, etc.).
	 *
	 * Example:
	 * 'post' => ['csrf', 'throttle']
	 *
	 * @var array
	 */
	public $methods = [];

	/**
	 * List of filter aliases that should run on any
	 * before or after URI patterns.
	 *
	 * Example:
	 * 'isLoggedIn' => ['before' => ['account/*', 'profiles/*']]
	 *
	 * @var array
	 */
	public $filters = [
		//'cors' => ['after' => ['api/*']]
	];
}
