<?php
/**
 * Index
 *
 * @package VSCode
 * @since 1.0.0
 */

// Header.
get_header();

// Display the page to admins and subscribers only.
if ( current_user_can( 'administrator' ) || current_user_can( 'subscriber' ) ) {
	echo 'HELLO!';
} else {
	wp_safe_redirect( 'https://VSCode.pro', 302 );
	exit;
}

// Footer.
get_footer();
