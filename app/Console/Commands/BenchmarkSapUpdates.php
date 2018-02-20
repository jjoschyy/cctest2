<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Sap\ProdorderController;

class BenchmarkSapUpdates extends Command {

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'benchmark:sap-updates';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Benchmark sap updates by static json files';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        echo "\n";
        $ctrl = new ProdorderController;
        $this->measure("Production-Order (~024kb ~050IT)", $ctrl, 'benchmark/sap/production-orders/100004750077.json');
        $this->measure("Production-Order (~150kb ~400IT)", $ctrl, 'benchmark/sap/production-orders/100004750255.json');
        $this->measure("Production-Order (~270kb ~190IT)", $ctrl, 'benchmark/sap/production-orders/100004752920.json');
        $this->measure("Production-Order (~280kb ~060IT)", $ctrl, 'benchmark/sap/production-orders/100004755734.json');
    }

    public function measure($name, $ctrl, $file) {
        $data = json_decode(Storage::get($file), true);
        echo "Measure $name... ";
        $start = microtime(true);
        $request = new Request($data);
        $response = $ctrl->update($request);
        $end = microtime(true);
        echo sprintf("\tStatus %s\t%ss\n", $response->getStatusCode(), number_format($end - $start, 11));
    }

}
