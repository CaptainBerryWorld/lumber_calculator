(function(){var __webpack_exports__={};$(document).ready((function(){var catHeader=$("#article-content-section").offset().top-370,catFooter=$("#article-footer-section").offset().top-800;$(window).scroll((function(){var t=$(window).scrollTop();t>=catHeader?$("#article-sidebar").addClass("sidebar-topic-sticky"):$("#article-sidebar").removeClass("sidebar-topic-sticky"),t>=catFooter&&$("#article-sidebar").removeClass("sidebar-topic-sticky"),$(".generated-content h2").each((function(){if($(window).scrollTop()>=$(this).offset().top-180){var t=$(this).attr("id"),e="<?php echo strtolower($post_category_initials);?>",a="text-<?php echo strtolower($post_category_initials);?>";void 0!==t&&($("#article-sidebar .table-of-content li a").removeClass("callout"),$("#article-sidebar .table-of-content li a").removeClass(a),$("#article-sidebar .table-of-content li").removeClass(e),$("#article-sidebar .table-of-content li."+t+" a").addClass("callout"),$("#article-sidebar .table-of-content li."+t+" a").addClass(a),$("#article-sidebar .table-of-content li."+t).addClass(e))}}))})),$("#article-sidebar .table-of-content li a").on("click",(function(event){event.preventDefault(),$("html, body").animate({scrollTop:eval($($(this).attr("href")).offset().top-70)},100)}))}))})();
//# sourceMappingURL=content-hub-content.js.map