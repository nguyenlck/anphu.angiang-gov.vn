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

/* themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig */
class __TwigTemplate_a5d0f2f0ae7ccd5b6bf68024ddadb0e2 extends Template
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
        // line 7
        echo "<div class=\"body-page\">
\t";
        // line 8
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/preloader.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 8)->display($context);
        // line 9
        echo "   ";
        $this->loadTemplate(($context["header_skin"] ?? null), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 9)->display($context);
        // line 10
        echo "\t
   ";
        // line 11
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/before-content.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 11)->display($context);
        // line 12
        echo "
\t<div role=\"main\" class=\"main main-page\">\t
\t\t<div id=\"content\" class=\"content content-full\">
\t\t\t<div class=\"container-full clearfix\">\t
\t\t\t\t";
        // line 16
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/main-no-sidebar.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 16)->display($context);
        // line 17
        echo "\t\t\t</div>
\t\t</div>\t\t\t
\t</div>

\t";
        // line 21
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/after-content.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 21)->display($context);
        // line 22
        echo "
\t";
        // line 23
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/panel.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 23)->display($context);
        // line 24
        echo "
\t";
        // line 25
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/footer.html.twig"), "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", 25)->display($context);
        // line 26
        echo "
</div>

";
    }

    public function getTemplateName()
    {
        return "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 26,  76 => 25,  73 => 24,  71 => 23,  68 => 22,  66 => 21,  60 => 17,  58 => 16,  52 => 12,  50 => 11,  47 => 10,  44 => 9,  42 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/gavias_batiz/templates/page/page-layout/page--layout--fw.html.twig", "C:\\wamp64\\www\\anphu.angiang.gov.vn\\themes\\gavias_batiz\\templates\\page\\page-layout\\page--layout--fw.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 8);
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['include'],
                [],
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
