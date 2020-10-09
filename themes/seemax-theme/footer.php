<footer class="footer" role="contentinfo">
	<div class="content">
		<ul class="footer-tile logo-tile c-width-50">
			<li class="logo-li">
				<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo-w.svg" alt="<?php echo esc_attr( $image['alt'] ); ?>"></a>
			</li>
			<li class="mailto-li">
				<a href='mailto:<?php the_field('email', 'option');?>'><?php the_field('email', 'option');?></a>
			</li>
			<li class="social-li">
				<?php if(get_field('facebook', 'option')):?>	
					<a class="" href="<?php the_field('facebook', 'options');?>" target="_blank">
						<i class="fab fa-facebook"></i>
					</a>
				<?php endif;?>
				<?php if(get_field('twitter', 'option')):?>	
					<a class="" href="<?php the_field('twitter', 'options');?>" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
				<?php endif;?>
			</li>
		</ul>
		
		<ul class="footer-tile footer-nav-tile c-width-50">
			<?php main_theme_nav(); ?>
		</ul>
		<div class="copyright">
			&copy; Copyright <?php echo date("Y"); ?> <?php echo get_bloginfo();?>
		</div>
</footer>
<?php wp_footer(); ?>
</div><!-- WRAPPER -->
</body>
</html>
