<h3><?php the_field('title'); ?></h3>
<p><?php the_field('name'); ?></p>
<div><?php if( get_field('rating') ) {
$starNumber = get_field('rating');

for($x=1;$x<=$starNumber;$x++) {
echo '&#11088';
}
if (strpos($starNumber,'.')) {
echo '&#11088';
$x++;
}
while ($x<=5) {
echo '&#11088';
$x++;
}
echo '(';
the_field('rating');
echo ')';
}
?></div>
<img src="<?php the_field('image'); ?>" alt="" />
<?php the_content() ?>
