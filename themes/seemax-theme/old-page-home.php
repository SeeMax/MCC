<?php /* Template Name: Old Home */ get_header(); ?>
	<main class="home-page">
		<?php while (have_posts()) : the_post(); ?>
				<?php if( have_rows('video_hero') ): ?>
					<?php while( have_rows('video_hero') ): the_row();?>
						<?php 
							// $link = get_sub_field('video_link');
							// $image = get_sub_field('background_image');
						?>
						<!-- <section class="video-hero-section">
							<div class="videowrapper" style="background-image: url(<?php echo $image['url'];?>);">
								<iframe src="https://player.vimeo.com/video/<?php echo $link;?>?autoplay=1&loop=1&muted=1" width="500" height="281" frameborder="0" frameborder=“0” allowfullscreen allow=autoplay; fullscreen></iframe>
							</div>
							<div class="fullscreen-bg">
								<video loop autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
									<source src="<?php echo get_template_directory_uri(); ?>/video/million-is_fin-2.mp4">" type="video/mp4">
								</video>
							</div> 
						</section> -->
    			<?php endwhile; ?>
				<?php endif; ?>
			
				<?php 
					$heroBack = get_field('background_image');		
					$heroTitle = get_field('hero_title');
					$videoLabel = get_field('video_button_label');
					$videoLink = get_field('video_button_link');
					$learnLabel = get_field('learn_more_label');
					$learnLink = get_field('learn_more_link');
				?>
				<section class="hero-section image-hero heroImage">
					<div class="the-image c-block-fill background-image-section theImage" style="background-image:url(<?php echo $heroBack['url'];?>);"></div>
					<div class="content">	
				
						<?php if($heroTitle) :?>
							<h1><?php echo $heroTitle();?></h1>
						<?php else:?>
							<h1>Together, we can train one million coaches</h1>
						<?php endif;?>
					</div>
				</section>
				
				<?php if( have_rows('banner_section') ): ?>
					<section class="hero-banner-section heroBanner">
						<div class="content">	
							<div class="color-flag-clip blue-flag flagBack">	
								<?php while( have_rows('banner_section') ): the_row();?>	
									<?php if( have_rows('fact') ):
										while( have_rows('fact') ) : the_row();?>
											<?php $number = get_sub_field('fact_number');?>
											<?php $text = get_sub_field('fact_text');?>
											<div class="single-hero-fact">	
												<h2><?php echo $number; ?></h2>
												<h4><?php echo $text; ?></h4>
											</div>
										<?php endwhile;?>
									<?php endif;?>
								
								<?php endwhile; ?>
							</div>
						</div>
					</section>
				<?php endif; ?>

				<?php if( have_rows('call_out_section_1') ): ?>
    			<?php while( have_rows('call_out_section_1') ): the_row();?>
					
						<?php 
							$headline = get_sub_field('headline');
							$body = get_sub_field('body_copy');
							if( have_rows('button') ):
								while( have_rows('button') ): the_row();
									$btnText = get_sub_field('button_text');
									$btnLink = get_sub_field('button_link');
								endwhile;
							endif;
						?>
						<section class="call-out-section animationOne">
							<div class="content headlineTrigger">					
								<h2><?php echo $headline; ?></h2>
								<p><?php echo $body; ?></p>
								<div class="seemax-button">
									<a class="c-block-fill" href="<?php echo $btnLink;?>"></a>
									<span><?php echo $btnText;?></span>
								</div>
							</div>
						</section>

    			<?php endwhile; ?>
				<?php endif; ?>
				
				<section class="image-carousel-section">
					
						<div class="center-carousel">		
							<?php if( have_rows('image_carousel') ): ?>
								<?php while( have_rows('image_carousel') ): the_row();?>
									<?php 
										$image = get_sub_field('image');
										$caption = $image['caption'];
									?>
									<div class="single-carousel-image">
										<img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" />
										<span><?php echo $caption;?></span>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
						<div class="arrow-container">
							<div class="prevArrow"></div>
							<div class="nextArrow"></div>
						</div>
					
				</section>

				<?php if( have_rows('call_out_section_2') ): ?>
    			<?php while( have_rows('call_out_section_2') ): the_row();?>
					
						<?php 
							$headline = get_sub_field('headline');
							$body = get_sub_field('body_copy');
							if( have_rows('button') ):
								while( have_rows('button') ): the_row();
									$btnText = get_sub_field('button_text');
									$btnLink = get_sub_field('button_link');
								endwhile;
							endif;
						?>
						<section class="call-out-section animationOne">
							<div class="content headlineTrigger">					
								<h2><?php echo $headline; ?></h2>
								<p><?php echo $body; ?></p>
								<div class="seemax-button">
									<a class="c-block-fill" href="<?php echo $btnLink;?>"></a>
									<span><?php echo $btnText;?></span>
								</div>
							</div>
						</section>

    			<?php endwhile; ?>
				<?php endif; ?>

				<?php if( have_rows('partners_section') ): ?>
    			<?php while( have_rows('partners_section') ): the_row();?>
						<?php $headline = get_sub_field('section_headline');?>
						<section class="partner-section">
							<div class="partners-title">
								<div class="content">
									<h2><?php echo $headline; ?></h2>
								</div>
							</div>
							<div class="partners-area whiteFlagAnimation">
								<div class="c-block-fill blue-gradient"></div>
								<div class="content flagTrigger">
									<?php $args = array(  
										'post_type' => 'partners',
										'posts_per_page' => -1,
										'orderby' => 'menu_order'
									);
									$loop = new WP_Query( $args );?>
									<?php if ( $loop->have_posts() ):?>
										<?php while ( $loop->have_posts() ) : $loop->the_post();?>    
											<?php 
												$shortDescription = get_field('short_description', get_the_ID());
												$description = get_field('full_description', get_the_ID());
												$link = get_field('website', get_the_ID());
												$image = get_field('image', get_the_ID());
												$size = 'medium_large';
												$thumb = $image['sizes'][ $size ];
												$alt = $image['alt'];
												$logo = get_field('logo', get_the_ID());
												$logoSize = 'medium_large';
												$logoThumb = $logo['sizes'][ $logoSize ];
												$logoAlt = $logo['alt'];
												
											?>
											<div class="single-partner color-flag-clip flagClip c-width-33-3">
												<?php if($logo):?>
													<div class="partner-logo">
														<img src="<?php echo esc_url($logoThumb); ?>" alt="<?php echo esc_attr($logoAlt); ?>" />
													</div>
												<?php endif;?>  
												<hr />	
												<?php if($shortDescription):?>
													<p><?php echo($shortDescription);?></p>
												<?php endif;?>
												<!-- <div class="seemax-button">
													<a class="c-block-fill" href="<?php echo esc_html($website);?>"></a>
													<span>Visit Website</span>
												</div> -->
												<a href="<?php echo esc_html($website);?>">
														Visit Website
												</a>
											</div>	
										<?php endwhile;?>      
										<?php wp_reset_postdata();?>                  
									<?php endif;?>
								</div>
							</div>
						</section>
    			<?php endwhile; ?>
				<?php endif; ?>

				<?php if( have_rows('contact_section') ): ?>
    			<?php while( have_rows('contact_section') ): the_row();?>
						<?php 
							$headline = get_sub_field('headline');
							if( have_rows('button') ):
								while( have_rows('button') ): the_row();
									$btnText = get_sub_field('button_text');
									$btnLink = get_sub_field('button_link');
								endwhile;
							endif;
						?>
						<section class="contact-section shield-section animationOne">
							<div class="content headlineTrigger">			
								<?php get_template_part( 'partials/_green-shield' ); ?>		
								<h2><?php echo $headline; ?></h2>
								<div class="seemax-button">
									<a class="c-block-fill" href="<?php echo $btnLink;?>"></a>
									<span><?php echo $btnText;?></span>
								</div>
							</div>
						</section>

    			<?php endwhile; ?>
				<?php endif; ?>

			
			
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
