<?php /* Template Name: Partners */ get_header(); ?>
	<main class="partners-page">
		<?php while (have_posts()) : the_post(); ?>				
			<section class="hero-section partner-hero-section heroHeadline">
				<div class="content">	
					<h1><?php the_title();?></h1>
					<hr />
					<?php the_content();?>
				</div>
			</section>
		
			<section class="partner-section">
				<div class="content">	
					<div class="partners-area">
						<?php $args = array(  
							'post_type' => 'partners',
							'posts_per_page' => -1,
							'orderby' => 'menu_order'
						);
						$loop = new WP_Query( $args );?>
						<?php if ( $loop->have_posts() ):?>
							<?php while ( $loop->have_posts() ) : $loop->the_post();?>    
								<?php 
									$theTitle = get_the_title();
									$description = get_field('full_description', get_the_ID());
									$link = get_field('website', get_the_ID());
									$image = get_field('image', get_the_ID());
									$size = 'full';
									$thumb = $image['sizes'][ $size ];
									$alt = $image['alt'];
									$caption = $image['caption'];
									$logo = get_field('logo', get_the_ID());
									$logoSize = 'medium_large';
									$logoThumb = $logo['sizes'][ $logoSize ];
									$logoAlt = $logo['alt'];
									
								?>
								<div class="single-partner">
									<h3><?php echo esc_html($theTitle);?></h3>
									<div class="c-width-50 image-flag">
										<div class="background-image-section image-flag-inner" style="background-image:url('<?php echo $image['url']; ?>');"></div>
										<span><?php echo $caption;?></span>
									</div>
									<div class="c-width-50 single-partner-content">
										<?php if($logo):?>
											<img src="<?php echo esc_url($logoThumb); ?>" alt="<?php echo esc_attr($logoAlt); ?>" />
										<?php endif;?>  
													
										<?php if($description):?>
											<?php echo($description);?>
										<?php endif;?>
										
										<div class="seemax-button">
											<a class="c-block-fill" href="<?php echo esc_html($website);?>"></a>
											<span>Visit Website</span>
										</div>
									</div>
								</div>	
							<?php endwhile;?>      
							<?php wp_reset_postdata();?>                  
						<?php endif;?>
					</div>
				</div>
			</section>
			
			
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
