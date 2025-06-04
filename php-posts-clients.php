<?php 
$technologies = array();
$args1 = array( 'post_type' => 'clients', 'posts_per_page' => 1000 );
$the_query = new WP_Query( $args1 );
if ( $the_query->have_posts() ):
?>
<ul>
<?php
  while ( $the_query->have_posts() ):
  $the_query->the_post();
  $gID = get_the_ID();
?>
<?php if ( has_post_thumbnail() ) : ?>
  <li class="wp-block-post post-<?php echo $gID; ?> type-clients ">
    <figure class="alignwide wp-block-post-featured-image">
      <?php the_post_thumbnail('full'); ?>
    </figure>
  </li>
  <?php endif; ?>
<?php
  endwhile;
  wp_reset_postdata();
?>
</ul>
<?php
endif;
?>
