<?php
/**
 * Plugin Name: ACF Custom Repeater
 * Description: Add custom Repeater-field to ACF (Freeversion).
 * Version: 1.0
 * Author: Volodimir
 */

if (!defined('ABSPATH')) exit;

// Register custom field ACF
add_action('acf/include_field_types', 'register_custom_repeater_field');

function register_custom_repeater_field($version) {
    include_once plugin_dir_path(__FILE__) . 'fields/acf-field-custom-repeater.php';
}