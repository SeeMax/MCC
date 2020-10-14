<?php /* Template Name: Partners */ get_header(); ?>
	<main class="partners-page">
		<?php while (have_posts()) : the_post(); ?>	

		<?php if( have_rows('hero') ): ?>
        <?php while( have_rows('hero') ): the_row();?>
            
          <?php $heroBack = get_sub_field('background_image');?>
          <section class="hero-section image-hero heroImage">
            <div class="the-image c-block-fill background-image-section theImage" style="background-image:url(<?php echo $heroBack['url'];?>);"></div>
            <div class="content">	
							<h1><?php the_title();?></h1>            
						</div>
          </section>
        <?php endwhile;?>
			<?php endif;?> 			
		
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
									$partnerAnchor = str_replace(' ', '_', (strtolower($theTitle)));  
								?>
								<div class="single-partner" id="<?php echo $partnerAnchor;?>">
									<h3><?php echo esc_html($theTitle);?></h3>
									<div class="c-width-50 image-flag">
										<div class="background-image-section image-flag-inner" style="background-image:url('<?php echo $image['url']; ?>');"></div>
										<?php if($caption):?>
											<span><?php echo $caption;?></span>
										<?php endif;?>
									</div>
									<div class="c-width-50 single-partner-content">
										<?php if($logo):?>
											<img src="<?php echo esc_url($logoThumb); ?>" alt="<?php echo esc_attr($logoAlt); ?>" />
										<?php endif;?>  
													
										<?php if($description):?>
											<?php echo($description);?>
										<?php endif;?>
										
										<div class="seemax-button">
											<a class="c-block-fill" href="<?php echo $link;?>"></a>
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

			<?php if( have_rows('contact_section') ): ?>
        <?php while( have_rows('contact_section') ): the_row();?>
          <?php 
						$headline = get_sub_field('headline');
						$body = get_sub_field('body');
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
							<p><?php echo $body;?></p>
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
