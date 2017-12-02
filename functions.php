<?php
// load css into the website's front-end
function jbtheme_enqueue_style() {
wp_enqueue_style( 'jbtheme-style', get_template_directory_uri() . "/build/index.css" );
}
add_action( 'wp_enqueue_scripts', 'jbtheme_enqueue_style' );