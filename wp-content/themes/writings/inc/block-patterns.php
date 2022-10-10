<?php
/**
 * Block Patterns
 * 
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern/
 * @link https://developer.wordpress.org/reference/functions/register_block_pattern_category/
 *
 * @package Writings
 * @since   1.3.0
 */

/**
 * Register Block Pattern Category.
 */
if ( function_exists( 'register_block_pattern_category' ) ) {
	register_block_pattern_category(
		'writings',
		array( 'label' => __( 'Writings Patterns', 'writings' ) )
	);
}

/**
 * Register Block Patterns.
 */
if ( function_exists( 'register_block_pattern' ) ) {

	// Latest Posts.
	register_block_pattern(
		'writings/latest-posts',
		array(
			'title'         => esc_html__( 'Latest Posts', 'writings' ),
			'categories'    => array( 'writings' ),
			'viewportWidth' => 720,
			'content'       => '<!-- wp:latest-posts {"postsToShow":3,"displayPostContent":true,"excerptLength":11,"displayPostDate":true,"displayFeaturedImage":true,"featuredImageAlign":"right","align":"center","className":"front-page-section"} /-->',
		)
	);

	register_block_pattern(
		'writings/alt-header',
		array(
			'title'         => esc_html__( 'Alt Header', 'writings' ),
			'categories'    => array( 'writings' ),
			'viewportWidth' => 720,
			'content'       =>
							'<!-- wp:media-text {"mediaId":691842,"mediaLink":"http://demos.dinevthemes.com/writings-pro/wp-content/uploads/sites/4/2019/04/letters-numbers-blocks-alphabet-691842-1140x560.jpg","mediaType":"image","mediaWidth":30,"verticalAlignment":"center","imageFill":true,"style":{"color":{"text":"#ffffff"},"elements":{"link":{"color":{"text":"#ffffff"}}}},"backgroundColor":"black"} -->
								<div class="wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-center is-image-fill has-black-background-color has-text-color has-background has-link-color" style="color:#ffffff;grid-template-columns:30% auto"><figure class="wp-block-media-text__media" style="background-image:url(http://demos.dinevthemes.com/writings-pro/wp-content/uploads/sites/4/2019/04/letters-numbers-blocks-alphabet-691842-1140x560.jpg);background-position:50% 50%"><img src="http://demos.dinevthemes.com/writings-pro/wp-content/uploads/sites/4/2019/04/letters-numbers-blocks-alphabet-691842-1140x560.jpg" alt="" class="wp-image-691842 size-full"/></figure><div class="wp-block-media-text__content"><!-- wp:columns -->
								<div class="wp-block-columns"><!-- wp:column {"width":"100px","textColor":"white"} -->
								<div class="wp-block-column has-white-color has-text-color" style="flex-basis:100px"></div>
								<!-- /wp:column -->

								<!-- wp:column {"width":"","textColor":"white"} -->
								<div class="wp-block-column has-white-color has-text-color"><!-- wp:spacer {"height":40} -->
								<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer -->

								<!-- wp:heading {"style":{"typography":{"fontSize":"48px"}},"textColor":"white"} -->
								<h2 class="has-white-color has-text-color" style="font-size:48px"><strong>The Writings</strong></h2>
								<!-- /wp:heading -->

								<!-- wp:spacer {"height":5} -->
								<div style="height:5px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer -->

								<!-- wp:separator {"className":"is-style-wide"} -->
								<hr class="wp-block-separator is-style-wide"/>
								<!-- /wp:separator -->

								<!-- wp:spacer {"height":5} -->
								<div style="height:5px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer -->

								<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.5"}},"fontSize":"small"} -->
								<p class="has-small-font-size" style="line-height:1.5">Writings is a single-column WordPress theme for writers, professional bloggers, and content makers. This theme fully compatible with the new WordPress Block Editor.</p>
								<!-- /wp:paragraph -->

								<!-- wp:spacer {"height":5} -->
								<div style="height:5px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer -->

								<!-- wp:buttons -->
								<div class="wp-block-buttons"><!-- wp:button {"textColor":"white","style":{"color":{"background":"#222"}}} -->
								<div class="wp-block-button"><a class="wp-block-button__link has-white-color has-text-color has-background" style="background-color:#222">Learn More</a></div>
								<!-- /wp:button --></div>
								<!-- /wp:buttons -->

								<!-- wp:spacer {"height":40} -->
								<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
								<!-- /wp:spacer --></div>
								<!-- /wp:column -->

								<!-- wp:column {"width":"100px"} -->
								<div class="wp-block-column" style="flex-basis:100px"></div>
								<!-- /wp:column --></div>
								<!-- /wp:columns --></div></div>
								<!-- /wp:media-text -->
								',
		)
	);

}