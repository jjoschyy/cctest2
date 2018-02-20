<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Schema;
use App\Library\Helper\LanguageHelper;

class AppServiceProvider extends ServiceProvider {

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        Schema::defaultStringLength(191);
        Blade::directive('languageFile', function ($filename) {
            return "<script type=\"text/javascript\">var langData=JSON.parse('<?='" . LanguageHelper::langFileJs($filename) . "'?>');</script>";
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        
    }

}
