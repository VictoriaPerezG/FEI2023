<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Frontpage Testimonial.
 *
 * @package formula
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'formula_Customize_Homepage_Testimonial_Option' ) ) :

	class formula_Customize_Homepage_Testimonial_Option extends formula_Customize_Base_Option {

		/**
		 * Arguments for options.
		 *
		 * @return array
		 */
		public function elements() {

			return array(

				'formula_main_testimonial_heading'     => array(
					'setting' => array(),
					'control' => array(
						'type'    => 'heading',
						'priority'        => 1,
						'label'   => esc_html__( 'Testimonial Options', 'formula' ),
						'section' => 'formula_theme_testimonial',
					),
				),
					
				// Testimonial Enable
				'formula_testimonial_disabled'            => array(
					'setting' => array(
						'default'           => true,
						'sanitize_callback' => array( 'formula_Customizer_Sanitize', 'sanitize_checkbox' ),
					),
					'control' => array(
						'type'     => 'toggle',
						'priority' => 3,
						'label'    => esc_html__( 'Testimonial Enable/Disable', 'formula' ),
						'section'  => 'formula_theme_testimonial',
					),
				),
				
				// Testimonial Autoplay
				'formula_testimonial_autoplay'           => array(
					'setting' => array(
						'default'           => true,
						'sanitize_callback' => array( 'formula_Customizer_Sanitize', 'sanitize_checkbox' ),
					),
					'control' => array(
						'type'     => 'toggle',
						'priority' => 15,
						'label'    => esc_html__( 'Testimonial Autoplay', 'formula' ),
						'section'  => 'formula_theme_testimonial',
						'active_callback'  => 'formula_testimonial_autoplay',
					),
				),
				
				// Testimonial Animation Speed
				'formula_testimonial_animation_speed' => array('setting' => array(
					'default'           => '4000',
					'sanitize_callback' => array( 'formula_Customizer_Sanitize', 'sanitize_radio' ),
					),
					'control' => array(
						'type'            => 'select',
						'priority'        => 20,
						'is_default_type' => true,
						'label'           => esc_html__( 'Testimonial Animation Speed', 'formula' ),
						'description'     => esc_html__( 'Note: Turn on Autoplay', 'formula' ),
						'section'         => 'formula_theme_testimonial',
						'choices'         => array(
							'2000' => esc_html__( '2.0', 'formula' ),
							'3000' => esc_html__( '3.0', 'formula' ),
							'4000' => esc_html__( '4.0', 'formula' ),
							'5000' => esc_html__( '5.0', 'formula' ),
							'6000' => esc_html__( '6.0', 'formula' ),
						),
						'active_callback'  => 'formula_testimonial_animation_speed',
					),
				),
				
				// container
				'formula_testimonial_container_size'     => array(
					'setting' => array(
						'default'			=> 'container-full',
						'sanitize_callback'	=> array( 'formula_Customizer_Sanitize', 'sanitize_radio' ),
					),
					'control' => array(
						'type'				=> 'radio',
						'priority'			=> 25,
						'is_default_type'	=> true,
						'label'				=> esc_html__( 'Testimonial Width', 'formula' ),
						'section'			=> 'formula_theme_testimonial',
						'choices'			=> array(
							'container'		=> esc_html__( 'Container', 'formula' ),
							'container-full'=> esc_html__( 'Container Full', 'formula' ),
						),
						'active_callback' => 'formula_testimonial_container_size',
					),
				),
				// column layout
				'formula_testimonial_column_layout'	=> array(
					'setting'	=> array(
						'default'           => 2,
						'sanitize_callback' => array( 'formula_Customizer_Sanitize', 'sanitize_radio' ),
					),
					'control'	=> array(
						'type'		=> 'radio_image',
						'priority'	=> 30,
						'label'		=> esc_html__( 'Column Layout', 'formula' ),
						'section'	=> 'formula_theme_testimonial',
						'choices'	=> array(
							'2'	=> FORMULA_THEME_URL . '/assets/images/icons/column-2.png',
							'3'	=> FORMULA_THEME_URL . '/assets/images/icons/column-3.png',
							'4'	=> FORMULA_THEME_URL . '/assets/images/icons/column-4.png',
						),
						'active_callback' => 'formula_testimonial_column_layout',
					),

				),

				'formula_testimonial_upgrade'	=> array(
					'setting' => array( ),
					'control' => array(
						'type'     => 'upgrade',
						'priority' => 10,
						'label'    => esc_html__( 'Testimonial', 'awp-companion' ),
						'section'  => 'formula_theme_testimonial',
					),
				),
			);
		}
	}

	new formula_Customize_Homepage_Testimonial_Option();

endif;