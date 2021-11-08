<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'SWNz+PtOL5YmizfCkFpnT7w1IFTqhtf/Ypm7fWa8eS4tabkIDmo9Dt2FOqvRGSCk1XSrD+DYIGTH6C2zltgS3w==');
define('SECURE_AUTH_KEY',  'S8snZZdkIgfhsYMo+X0DIB3qBsFf4XspjgHI9Pd6KL2J/u8MKX4Fp4aVUiO1wbcmoJPaSdk+EwH5r/Y7RXUrDg==');
define('LOGGED_IN_KEY',    'G40e+DA1HWoDhVGnJJoRmOirvy64paLTJxarz/ZU/BiBjjDl+QWlyUJADqpeijGuI/1rTK9owdHFsZNZTFnPLw==');
define('NONCE_KEY',        'pGlspVIFbFEP+cd6f9v3oOhBcC41Y+/J9gUptEn3aDW04NbasfriSouAB1mlTbtfVWlHN4RRhkSEaVl+bs0jag==');
define('AUTH_SALT',        'UnWi42VnSA9+f6sxZZfsu/vfPYkgdzyFCq3UIIjUgBrQbS+a+g92MKIZr2/qW8grnjZajTpIdsvgOhbzo9tCuA==');
define('SECURE_AUTH_SALT', 'PUImtnum8brh8+TXmim55tnGrjO3X8lHpL6zUgC5911wivb/C0zr2WBQgocpoIaqz947xpjxea2m7Npq2FJQEA==');
define('LOGGED_IN_SALT',   'XfbvxaDOG6FSJQn56ThkCpQJPnSbrhYe7e0Zs63gWk5vKv8ebbtGERkDZfqi00fukC6aiPvaaiKISiU4crUTaA==');
define('NONCE_SALT',       'wfVf8I3cZ0e29cPkvW/VY5ul8za4lMSEBHib2YOQ0jhH8tqv7vGHKWL+TGDnsYjqV3252uugraJhqlBiosmW4g==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
