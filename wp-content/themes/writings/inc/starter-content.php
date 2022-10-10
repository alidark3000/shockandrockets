<?php
/**
 * Writings Starter Content
 * 
 * Based on Twenty Twenty theme starter content
 * @link https://make.wordpress.org/core/2016/11/30/starter-content-for-themes-in-4-7/
 * 
 */

/**
 * Function to return the array of starter content for the theme.
 *
 * Passes it through the `writings_starter_content` filter before returning.
 *
 * @return array a filtered array of args for the starter_content.
 */
function writings_get_starter_content() {

	// Define and register starter content to showcase the theme on new sites.
	$starter_content = array(
		// Create the custom image attachment
		'attachments' => array(
			'image-opening' => array(
				'post_title' => __( 'Writings', 'writings' ),
				'file'       => 'assets/images/writings.jpg',
			),
		),
		// Specify the core-defined pages
		'posts'       => array(
			'front' => array(
				'post_type'    => 'page',
				'post_title'   => __( 'Front', 'writings' ),
				'thumbnail'    => '{{image-opening}}',
				'post_content' => __( 'Writings is a Gutenberg-ready theme for writers, publishers, and content marketers. The theme comes with built Latest Posts block pattern and support few plugins extending the block editor like Atomic Block, CoBlocks, Getwid.', 'writings' ),
			),
			'about'=> array(
				'post_type'    => 'page',
				'post_title'   => __( 'About', 'writings' ),
				'post_content' => __( 'Writings is a Gutenberg-ready theme for writers, publishers, and content marketers. The theme comes with built Latest Posts block pattern and support few plugins extending the block editor like Atomic Block, CoBlocks, Getwid. ', 'writings' )
			),
			'blog'=> array(
				'post_type'    => 'page',
				'post_title'   => __( 'Blog Page', 'writings' )
			),
		),

		// Default to a static front page and assign the front and posts pages.
		'options'     => array(
			'show_on_front'  => 'page', // 'blog'
			'page_on_front'  => '{{front}}',
			'page_for_posts' => '{{blog}}',
		),

		// Set the theme mods
		'theme_mods'  => array(
			'hide_frontpage_header' => '1',
			'site_tagline_hide' => '1',
			//'custom_css' => ''
		),

		// Set up nav menu and assign to the "primary" location.
		'nav_menus'   => array(
			'primary'  => array(
				'name'  => __( 'Primary', 'writings' ),
				'items' => array(
					'link_home',
					'page_about',
					'page_blog'
				),
			)
		),
	);

	/**
	 * Filters theme array of starter content.
	 *
	 * @param array $starter_content Array of starter content.
	 */
	return apply_filters( 'writings_starter_content', $starter_content );

}
