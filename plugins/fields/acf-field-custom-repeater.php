<?php

if (!defined('ABSPATH')) exit;

class acf_field_custom_repeater extends acf_field {
    
    function __construct($settings) {
        $this->name = 'custom_repeater';
        $this->label = __('Custom Repeater');
        $this->category = 'layout';
        $this->defaults = [];
        $this->l10n = [];

        parent::__construct();
    }

    function render_field($field) {
        $value = is_array($field['value']) ? $field['value'] : [];

        echo '<div class="custom-repeater-wrapper">';
        echo '<button type="button" class="add-row">Add row</button>';
        echo '<ul class="custom-repeater-list">';

        foreach ($value as $index => $row) {
            echo '<li>';
            echo '<input type="text" name="' . esc_attr($field['name']) . '[]' . '" value="' . esc_attr($row) . '">';
            echo '<button type="button" class="remove-row">Remove</button>';
            echo '</li>';
        }

        echo '</ul>';
        echo '</div>';

        ?>
        <script>
        (function($){
            $(document).on('click', '.add-row', function(){
                const list = $(this).siblings('.custom-repeater-list');
                list.append('<li><input type="text" name="<?= esc_attr($field['name']) ?>[]" value=""><button type="button" class="remove-row">Remove</button></li>');
            });

            $(document).on('click', '.remove-row', function(){
                $(this).parent().remove();
            });
        })(jQuery);
        </script>
        <style>
            .custom-repeater-wrapper ul { list-style: none; padding-left: 0; }
            .custom-repeater-wrapper li { margin-bottom: 8px; }
        </style>
        <?php
    }

    function render_field_settings($field) {
        // no settings
    }

    function update_value($value, $post_id, $field) {
        return array_filter(array_map('sanitize_text_field', (array)$value));
    }

    function load_value($value, $post_id, $field) {
        return $value;
    }

    function input_admin_enqueue_scripts() {
        // add scripts if need
    }
}

new acf_field_custom_repeater([]);