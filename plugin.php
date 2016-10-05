<?php

/*
 * Plugin Name: Data
 * Plugin URI:
 * Description: Sends usage data to WordPress.org
 * Version:     0.0.0
 * Author:      WordPress
 * Author URI:  https://wordpress.org
 * Text Domain:
 * Domain Path:
 * Network:
 * License:     GPL-2.0+
 */

// Prefix/namespace with wpdotorg_data.

add_action( 'mce_external_plugins', 'wpdotorg_data_mce_external_plugins' );

function wpdotorg_data_mce_external_plugins( $plugins ) {
	return array_merge( $plugins, array(
		'wpdotorg_data' => plugins_url( 'tinymce-plugin.js', __FILE__ )
	) );
}
