<?php /* Template Name: Why Coaches */ get_header(); ?>
	<main class="why-coaches-page">
    <?php while (have_posts()) : the_post(); ?>		
      <?php 
        $image = get_field('highlight_flag_image');
        $caption = $image['caption'];
      ?>		
      <section class="hero-section image-hero heroImage">
        <div class="the-image c-block-fill background-image-section theImage" style="background-image:url(<?php echo $image['url'];?>);"></div>
				<div class="content">	
        <h1><?php the_title();?></h1>
        <h2 class="home-hero-headline homeHeroHeadline"><?php the_title();?></h2>
				</div>
			</section>
			
          
			
      <section class="the-challenge-main-section subFlagAnimation">
        <?php 
          $image = get_field('highlight_flag_image');
          $caption = $image['caption'];
        ?>
				<div class="content">	
        <div class="color-flag-clip blue-flag subFlag c-width-50">
          <h3><?php the_field('hero_sub_text');?></h3>
          <h4><?php the_field('hero_sub_text_2');?></h4>
        </div>

        <div class="description-half subDescription c-width-50">
          <?php the_field('why_coaches_description');?>
        </div>

        </div>
      </section>
      <section class="contact-section shield-section animationOne">
        <div class="content headlineTrigger">	
          <?php if( have_rows('take_action') ):?>
            <?php while( have_rows('take_action') ) : the_row();?>
              <?php 
                $title = get_sub_field('title');
                $body = get_sub_field('body');
                if( have_rows('button') ):
                  while( have_rows('button') ) : the_row();
                    $btnDest = get_sub_field('button_dest');
                    $btnLbl = get_sub_field('button_label');
                  endwhile;
                endif;
              ?>		
              <?php get_template_part( 'partials/_green-shield' ); ?>		
              <h2><?php echo $title;?></h2>
              <div class="seemax-button">
                <a class="c-block-fill" href="<?php echo $btnDest;?>"></a>
                <span><?php echo $btnLbl;?></span>
              </div>
            <?php endwhile;?>
          <?php endif;?>
        </div>
      </section>
			
			
			
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>
