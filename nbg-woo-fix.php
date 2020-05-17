<?php
/*
Plugin Name: NBG Woocommerce Payment Temporary Fix
Version: 1.3
Description: This Plugin Translates the input fields at the woocommerce checkout page from greek to english
Author: Dionisis Mpolanis
 */



 add_action( 'wp_enqueue_scripts', 'add_nbc_translator2' );


function add_nbc_translator2() {

    if (is_checkout() || is_account_page()){
        wp_enqueue_script( 'script', plugins_url('translation.js', __FILE__), array('jquery'), 1.1, true);
    }
}
