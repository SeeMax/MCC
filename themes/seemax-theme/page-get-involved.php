<?php /* Template Name: Get Involved */ get_header(); ?>
	<main class="get-involved-page">
		<?php while (have_posts()) : the_post(); ?>	
			<?php $heroBack = get_field('hero_background_image');?>				
			<section class="hero-section image-hero heroImage">
				<div class="the-image c-block-fill background-image-section theImage" style="background-image:url(<?php echo $heroBack['url'];?>);"></div>
				<div class="content">	
					<h1><?php the_title();?></h1>
				</div>
			</section>
      <section class="get-involved-main-section">
				<div class="content">	
					<?php if( have_rows('steps') ):?>
  					<?php while( have_rows('steps') ) : the_row();?>
							<?php 
								$title = get_sub_field('step_title');
								$details = get_sub_field('step_details');
								if( have_rows('button_1') ):
									while( have_rows('button_1') ) : the_row();
										$btnDest = get_sub_field('button_destination_');
										$btnLbl = get_sub_field('button_label');
									endwhile;
								endif;
								if( have_rows('button_2') ):
									while( have_rows('button_2') ) : the_row();
										$btnDest2 = get_sub_field('button_destination_');
										$btnLbl2 = get_sub_field('button_label');
									endwhile;
								endif;
							?>
							<div class="single-involved-step involvedStep c-width-50">
								<h3><?php echo $title;?></h3>
								<p><?php echo $details;?><p>
								<div class="seemax-button">
									<a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
									<span><?php echo $btnLbl;?></span>
								</div>
								<?php if($btnDest2):?>
									<div class="seemax-button">
										<a class="c-block-fill" href="<?php echo $btnDest2;?>"></a>
										<span><?php echo $btnLbl2;?></span>
									</div>
								<?php endif;?>
							</div>
						<?php endwhile;?>
					<?php endif;?>
        </div>
      </section>
		
			<section id ="contact" class="contact-form-section">
				<div class="content">	
				<?php if( have_rows('contact_section') ):?>
  					<?php while( have_rows('contact_section') ) : the_row();?>
							<?php 
								$contactTitle = get_sub_field('section_title');
								$contactDetails = get_sub_field('section_text');
								$disclaimer = get_sub_field('section_disclaimer');
							?>
							<div class="contact-form-intro c-width-50">
								<h2><?php echo $contactTitle;?></h2>
								<?php echo $contactDetails;?>
								<div class="contact-disclaimer">
									<?php echo $disclaimer;?>
								</div>
							</div>
						<?php endwhile;?>
					<?php endif;?>
					<div class="contact-form-form color-flag-clip blue-flag c-width-50">
						<?php echo do_shortcode('[contact-form-7 id="65" title="Contact Form"]');?>
					</div>
				</div>
			</section>
			
			
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
