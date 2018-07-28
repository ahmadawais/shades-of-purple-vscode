<?php
/**
 * PHP is fun
 *
 * Spent a whole night building this theme
 * now my neck hurts. Time to hit the bed.
 *
 * @param String hello Hello.
 * @param Number count Count of hells said.
 * @param Boolean isBye True or False.
 * @return Boolean
 * @since 1.0.0
 */

// Header.
get_header();

$ahmad = 'Ahmad';
$awais = 'Awais';

// Display the page to admins and subscribers only.
if ( current_user_can( 'administrator' ) || current_user_can( 'subscriber' ) ) {
	echo 'HELLO!';
} else {
	wp_safe_redirect( 'https://VSCode.pro', 302 );
	exit;
}

// Footer.
get_footer();



/**
 * Small  Class.
 *
 * @since 1.0.0
 */
class Small {
	/**
	 * Name.
	 *
	 * @var String
	 * @since 1.0.0
	 */
	public static $name;

	/**
	 * Sum.
	 *
	 * @param Number $num1 First number.
	 * @param Number $num2 First number.
	 * @return Number
	 * @since 1.0.0
	 */
	public static function sum( $num1, $num2 ) {
		return $num1 + $num2;
	}
}

/**
 * User
 *
 * @since   1.0.0
 * @package CP
 */

namespace CP;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * User.
 *
 * @usage Class the class User::singleton();
 * @since 1.0.0
 */
class User {
	/**
	 * Add the endpoints to the API.
	 *
	 * @since 1.0.0
	 */
public static function addApiRoutes() {
	register_rest_route(
		'cp/v1',
		'user/register',
		[
			'methods'  => 'POST',
			'callback' => [ __CLASS__, 'register' ],
		],
		true // Override existing route if there.
	);
}

	/**
	 * Get the user registered.
	 *
	 * @param  \WP_REST_Request $request Request by user.
	 * @return \WP_REST_Response Response.
	 * @since  1.0.0
	 */
public static function register( \WP_REST_Request $request = null ) {
	$response   = array();
	$parameters = $request->get_json_params();
	$email      = sanitize_text_field( $parameters['email'] );
	$username   = $email;
	$password   = wp_generate_password();
	$role       = 'subscriber';
	$error      = new \WP_Error();
	// User register.
	$user_already_exists = email_exists( $email );
	Functions::log( $user_already_exists );
	if ( false === $user_already_exists ) {
		$user_id = wp_create_user( $username, $password, $email );
		if ( ! is_wp_error( $user_id ) ) {
			$user = get_user_by( 'id', $user_id );
			$user->set_role( $role );
			$response['code'] = 200;
		}
		return new \WP_REST_Response( $response, 200 );
	}

	/**
	 * Setup.
	 *
	 * @since 1.0.0
	 */
	private function setup() {
		add_action( 'rest_api_init', [ __CLASS__, 'addApiRoutes' ] );
	}

	/**
	 * Return singleton instance of the class.
	 *
	 * @since 1.0.0
	 * @return object
	 */
	public static function singleton() {
		static $instance; // Static Instance.
		if ( ! $instance ) {
			$instance = new self(); // Get a new instance.
			$instance->setup();
		}
		return $instance;
	}

	/**
	 * Dummy constructor.
	 *
	 * @since  1.0.0
	 */
	public function __construct() {}
}
