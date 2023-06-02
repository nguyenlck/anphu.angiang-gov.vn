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

/* themes/gavias_batiz/templates/page/html.html.twig */
class __TwigTemplate_878c350a278dbc53d5e8c7029b0ee27e extends Template
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
        // line 26
        echo "<!DOCTYPE html>
<html";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["html_attributes"] ?? null), 27, $this->source), "html", null, true);
        echo ">
  <head> 
    <head-placeholder token=\"";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 29, $this->source));
        echo "\">
    
    <title>";
        // line 31
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->safeJoin($this->env, $this->sandbox->ensureToStringAllowed(($context["head_title"] ?? null), 31, $this->source), " | "));
        echo "</title>
    <css-placeholder token=\"";
        // line 32
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 32, $this->source));
        echo "\">
    <js-placeholder token=\"";
        // line 33
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 33, $this->source));
        echo "\">
    
    ";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["links_google_fonts"] ?? null), 35, $this->source));
        echo "

    <link rel=\"stylesheet\" href=\"";
        // line 37
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_path"] ?? null), 37, $this->source), "html", null, true);
        echo "/css/custom.css\" media=\"screen\" />
    <link rel=\"stylesheet\" href=\"";
        // line 38
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_path"] ?? null), 38, $this->source), "html", null, true);
        echo "/css/update.css\" media=\"screen\" />
    
    ";
        // line 40
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["links_google_fonts"] ?? null), 40, $this->source));
        echo "

    ";
        // line 42
        if (($context["customize_styles"] ?? null)) {
            // line 43
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["customize_styles"] ?? null), 43, $this->source));
            echo "
    ";
        }
        // line 45
        echo "
    ";
        // line 46
        if (($context["customize_css"] ?? null)) {
            // line 47
            echo "      <style type=\"text/css\">
        ";
            // line 48
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["customize_css"] ?? null), 48, $this->source));
            echo "
      </style>
     ";
        }
        // line 50
        echo " 

  </head>
  ";
        // line 53
        $context["body_classes"] = [0 => ((        // line 54
($context["logged_in"] ?? null)) ? ("logged-in") : ("")), 1 => (( !        // line 55
($context["root_path"] ?? null)) ? ("frontpage") : (("path-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["root_path"] ?? null), 55, $this->source))))), 2 => ((        // line 56
($context["node_type"] ?? null)) ? (("node--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["node_type"] ?? null), 56, $this->source)))) : ("")), 3 => ((        // line 57
($context["node_id"] ?? null)) ? (("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["node_id"] ?? null), 57, $this->source)))) : (""))];
        // line 60
        echo "  <body";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["body_classes"] ?? null)], "method", false, false, true, 60), 60, $this->source), "html", null, true);
        echo ">
    ";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_top"] ?? null), 61, $this->source), "html", null, true);
        echo "
    ";
        // line 62
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page"] ?? null), 62, $this->source), "html", null, true);
        echo "
    ";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_bottom"] ?? null), 63, $this->source), "html", null, true);
        echo "
    <js-bottom-placeholder token=\"";
        // line 64
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 64, $this->source));
        echo "\">
    ";
        // line 65
        if (($context["addon_template"] ?? null)) {
            // line 66
            echo "      <div class=\"permission-save-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["save_customize_permission"] ?? null), 66, $this->source), "html", null, true);
            echo "\">
        ";
            // line 67
            $this->loadTemplate(($context["addon_template"] ?? null), "themes/gavias_batiz/templates/page/html.html.twig", 67)->display($context);
            // line 68
            echo "      </div>  
    ";
        }
        // line 70
        echo "  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_batiz/templates/page/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  151 => 70,  147 => 68,  145 => 67,  140 => 66,  138 => 65,  134 => 64,  130 => 63,  126 => 62,  122 => 61,  117 => 60,  115 => 57,  114 => 56,  113 => 55,  112 => 54,  111 => 53,  106 => 50,  100 => 48,  97 => 47,  95 => 46,  92 => 45,  86 => 43,  84 => 42,  79 => 40,  74 => 38,  70 => 37,  65 => 35,  60 => 33,  56 => 32,  52 => 31,  47 => 29,  42 => 27,  39 => 26,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_batiz/templates/page/html.html.twig", "C:\\wamp64\\www\\anphu.angiang.gov.vn\\themes\\gavias_batiz\\templates\\page\\html.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 42, "set" => 53, "include" => 67);
        static $filters = array("escape" => 27, "raw" => 29, "safe_join" => 31, "clean_class" => 55);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'include'],
                ['escape', 'raw', 'safe_join', 'clean_class'],
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
