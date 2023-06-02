<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/gavias_batiz/templates/node/node--video.html.twig */
class __TwigTemplate_35e009667c23481e5b2126cf9d371ae1 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 2
        $context["classes"] = [0 => "node", 1 => "node-detail", 2 => ("node--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 5
($context["node"] ?? null), "bundle", [], "any", false, false, true, 5), 5, $this->source))), 3 => ((twig_get_attribute($this->env, $this->source,         // line 6
($context["node"] ?? null), "isPromoted", [], "method", false, false, true, 6)) ? ("node--promoted") : ("")), 4 => ((twig_get_attribute($this->env, $this->source,         // line 7
($context["node"] ?? null), "isSticky", [], "method", false, false, true, 7)) ? ("node--sticky") : ("")), 5 => (( !twig_get_attribute($this->env, $this->source,         // line 8
($context["node"] ?? null), "isPublished", [], "method", false, false, true, 8)) ? ("node--unpublished") : ("")), 6 => "clearfix"];
        // line 12
        echo "
";
        // line 13
        if ((($context["view_mode"] ?? null) == "teaser")) {
            echo " 
  <div";
            // line 14
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 14), 14, $this->source), "html", null, true);
            echo ">
    <div class=\"video-block\">
      <div class=\"post-thumbnail\">
        ";
            // line 17
            if (twig_trim_filter(($context["gva_iframe"] ?? null))) {
                // line 18
                echo "          ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["gva_iframe"] ?? null), 18, $this->source));
                echo "
        ";
            } else {
                // line 20
                echo "          ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
                echo "
        ";
            }
            // line 21
            echo "  
      </div>

      <div class=\"post-content\">
        <div class=\"icon\">
          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" width=\"49\" height=\"49\">
            <path class=\"svg-stroke-solid\" fill=\"none\" stroke=\"currentColor\" d=\"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
              C97.3,23.7,75.7,2.3,49.9,2.5\"></path>
            <path class=\"svg-stroke-icon\" fill=\"currentColor\" d=\"M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z\"></path>
          </svg>
        </div>
        <h3 class=\"title\"><a href=\"";
            // line 32
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 32, $this->source), "html", null, true);
            echo "\" rel=\"bookmark\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 32, $this->source), "html", null, true);
            echo "</a></h3>
      </div>

    </div>
  </div>  

";
        } elseif (((        // line 38
($context["view_mode"] ?? null) == "teaser_1") || (($context["view_mode"] ?? null) == "teaser_2"))) {
            // line 39
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 39), 39, $this->source), "html", null, true);
            echo ">
    <div class=\"video-block\">
      <div class=\"post-thumbnail\">";
            // line 41
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image", [], "any", false, false, true, 41), 41, $this->source), "html", null, true);
            echo "</div>
      <div class=\"post-content\">
        <div class=\"icon\">
          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" width=\"49\" height=\"49\">
            <path class=\"svg-stroke-solid\" fill=\"none\" stroke=\"currentColor\" d=\"M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
              C97.3,23.7,75.7,2.3,49.9,2.5\"></path>
            <path class=\"svg-stroke-icon\" fill=\"currentColor\" d=\"M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z\"></path>
          </svg>
        </div>
        <h3 class=\"title\"><a href=\"";
            // line 50
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 50, $this->source), "html", null, true);
            echo "\" rel=\"bookmark\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 50, $this->source), "html", null, true);
            echo "</a></h3>
      </div>
    </div>
  </div>  

";
        } else {
            // line 56
            echo "
<article";
            // line 57
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 57), 57, $this->source), "html", null, true);
            echo ">
  <div class=\"post-block\">
      
    <div class=\"post-thumbnail\">
      ";
            // line 61
            if (($context["gva_iframe"] ?? null)) {
                // line 62
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["gva_iframe"] ?? null), 62, $this->source));
                echo "
      ";
            } else {
                // line 64
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
                echo "
      ";
            }
            // line 65
            echo "  
    </div>

    <div class=\"post-content\">
      ";
            // line 69
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 69, $this->source), "html", null, true);
            echo "
         <h1";
            // line 70
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => "post-title"], "method", false, false, true, 70), 70, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 70, $this->source), "html", null, true);
            echo "</h1>
      ";
            // line 71
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 71, $this->source), "html", null, true);
            echo "         
      <div class=\"post-meta hidden\">
        <span class=\"post-created\"> ";
            // line 73
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["date"] ?? null), 73, $this->source), "html", null, true);
            echo " </span> 
      </div>
      
      ";
            // line 76
            if (($context["display_submitted"] ?? null)) {
                // line 77
                echo "        <div class=\"node__meta hidden\">
          ";
                // line 78
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author_picture"] ?? null), 78, $this->source), "html", null, true);
                echo "
          <span";
                // line 79
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["author_attributes"] ?? null), 79, $this->source), "html", null, true);
                echo ">
            ";
                // line 80
                echo t("Submitted by @author_name on @date", array("@author_name" => ($context["author_name"] ?? null), "@date" => ($context["date"] ?? null), ));
                // line 81
                echo "          </span>
          ";
                // line 82
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["metadata"] ?? null), 82, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 85
            echo "
      <div";
            // line 86
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "node__content", 1 => "clearfix"], "method", false, false, true, 86), 86, $this->source), "html", null, true);
            echo ">
        ";
            // line 87
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 87, $this->source), "field_image", "field_video_embed", "comment"), "html", null, true);
            echo "
      </div>
      <div id=\"node-single-comment\">
        ";
            // line 90
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "comment", [], "any", false, false, true, 90), 90, $this->source), "html", null, true);
            echo "
      </div>

    </div>

  </div>

</article>

<!-- End Display article for detail page -->
";
        }
    }

    public function getTemplateName()
    {
        return "themes/gavias_batiz/templates/node/node--video.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  215 => 90,  209 => 87,  205 => 86,  202 => 85,  196 => 82,  193 => 81,  191 => 80,  187 => 79,  183 => 78,  180 => 77,  178 => 76,  172 => 73,  167 => 71,  161 => 70,  157 => 69,  151 => 65,  145 => 64,  139 => 62,  137 => 61,  130 => 57,  127 => 56,  116 => 50,  104 => 41,  98 => 39,  96 => 38,  85 => 32,  72 => 21,  66 => 20,  60 => 18,  58 => 17,  52 => 14,  48 => 13,  45 => 12,  43 => 8,  42 => 7,  41 => 6,  40 => 5,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_batiz/templates/node/node--video.html.twig", "C:\\wamp64\\www\\anphu.angiang.gov.vn\\themes\\gavias_batiz\\templates\\node\\node--video.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 13, "trans" => 80);
        static $filters = array("clean_class" => 5, "escape" => 14, "trim" => 17, "raw" => 18, "without" => 87);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'trans'],
                ['clean_class', 'escape', 'trim', 'raw', 'without'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
