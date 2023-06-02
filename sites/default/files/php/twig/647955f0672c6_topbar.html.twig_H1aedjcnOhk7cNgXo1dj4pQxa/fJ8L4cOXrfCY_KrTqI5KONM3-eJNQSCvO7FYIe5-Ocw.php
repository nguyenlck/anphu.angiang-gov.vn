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

/* themes/gavias_batiz/templates/page/parts/topbar.html.twig */
class __TwigTemplate_69d8593dd1b4e59eccee5b0f90f75f9f extends Template
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
        // line 1
        echo "<div class=\"topbar\">
  <div class=\"container\">
    <div class=\"row\">
      
      <div class=\"topbar-left col-sm-8 col-xs-12\">
        ";
        // line 6
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breaking_news", [], "any", false, false, true, 6)) {
            // line 7
            echo "          <div class=\"breaking-news\">
            <div class=\"clearfix\">
              <div class=\"content-inner\">";
            // line 9
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breaking_news", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
            echo "</div> 
            </div> 
          </div>
        ";
        }
        // line 13
        echo "      </div>

      <div class=\"topbar-right col-sm-4 col-xs-12\">
        <div class=\"social-list\">
          ";
        // line 17
        if (twig_get_attribute($this->env, $this->source, ($context["custom_social_link"] ?? null), "facebook", [], "any", false, false, true, 17)) {
            // line 18
            echo "            <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["custom_social_link"] ?? null), "facebook", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-facebook\"></i></a>
          ";
        }
        // line 19
        echo " 
          ";
        // line 20
        if (twig_get_attribute($this->env, $this->source, ($context["custom_social_link"] ?? null), "youtube", [], "any", false, false, true, 20)) {
            // line 21
            echo "            <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["custom_social_link"] ?? null), "youtube", [], "any", false, false, true, 21), 21, $this->source), "html", null, true);
            echo "\"><i class=\"fa fa-youtube-square\"></i></a>
          ";
        }
        // line 22
        echo " 
         
        </div>  
      </div>
    </div>
  </div>  
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/gavias_batiz/templates/page/parts/topbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 22,  78 => 21,  76 => 20,  73 => 19,  67 => 18,  65 => 17,  59 => 13,  52 => 9,  48 => 7,  46 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_batiz/templates/page/parts/topbar.html.twig", "C:\\wamp64\\www\\anphu.angiang.gov.vn\\themes\\gavias_batiz\\templates\\page\\parts\\topbar.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 6);
        static $filters = array("escape" => 9);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
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
