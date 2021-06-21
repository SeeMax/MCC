<?php /* Template Name: The Challenge */ get_header(); ?>
	<main class="challenge-page">
    <?php while (have_posts()) : the_post(); ?>		
      <?php $heroBack = get_field('hero_background_image');?>		
			<section class="hero-section image-hero heroImage">
        <div class="the-image c-block-fill background-image-section theImage" style="background-image:url(<?php echo $heroBack['url'];?>);"></div>
				<div class="content">	
          <h1><?php the_title();?></h1>
          <h2 class="home-hero-headline homeHeroHeadline"><?php the_title();?></h2>
				</div>
			</section>
      <section class="challenge-main-section subFlagAnimation">
				<div class="content">	
					<?php if( have_rows('highlight_flag') ):?>
            <?php while( have_rows('highlight_flag') ) : the_row();?>
              <?php 
								$mainText = get_sub_field('main_text');
								$subText = get_sub_field('sub_text');
							?>						
							<div class="color-flag-clip blue-flag subFlag c-width-50">
								<h3><?php echo $mainText;?></h3>
								<h4><?php echo $subText;?></h4>
							</div>
						<?php endwhile;?>
          <?php endif;?>
          
          <div class="description-half subDescription c-width-50">
            <?php the_field('challenge_description');?>
          </div>

        </div>
      </section>
		
			<section class="challenge-cta-section blue-gradient whiteFlagAnimation ">
				<div class="content flagTrigger">	
				<?php if( have_rows('funding_flag') ):?>
          <?php while( have_rows('funding_flag') ) : the_row();?>
            <?php 
              $logo = get_sub_field('logo');
              $title = get_sub_field('title');
              $body = get_sub_field('body');
              if( have_rows('button') ):
                while( have_rows('button') ) : the_row();
                  $btnDest = get_sub_field('button_dest');
                  $btnLbl = get_sub_field('button_label');
                endwhile;
              endif;
            ?>
            <div class="color-flag-clip flagClip c-width-50">
              <img src="<?php echo $logo['url'];?>">
              <hr />
              <h3><?php echo $title;?></h3>
              <?php echo $body;?>
              <div class="seemax-button">
                <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
                <span><?php echo $btnLbl;?></span>
              </div>
            </div>
						<?php endwhile;?>
          <?php endif;?>
          <?php if( have_rows('partner_flag') ):?>
          <?php while( have_rows('partner_flag') ) : the_row();?>
            <?php 
              $logo = get_sub_field('logo');
              $title = get_sub_field('title');
              $body = get_sub_field('body');
              if( have_rows('button') ):
                while( have_rows('button') ) : the_row();
                  $btnDest = get_sub_field('button_dest');
                  $btnLbl = get_sub_field('button_label');
                endwhile;
              endif;
            ?>
            <div class="color-flag-clip flagClip c-width-50">
              <img src="<?php echo $logo['url'];?>">
              <hr />
              <h3><?php echo $title;?></h3>
              <?php echo $body;?>
              <div class="seemax-button">
                <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
                <span><?php echo $btnLbl;?></span>
              </div>
            </div>
						<?php endwhile;?>
					<?php endif;?>
				</div>
			</section>
			
			
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
