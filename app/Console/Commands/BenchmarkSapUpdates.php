<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Sap\ProdorderController;

class BenchmarkSapUpdates extends Command
{
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
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      echo "\n";
      $ctrl = new ProdorderController;
      $this->measure("Production-Order (~24kb)", $ctrl, 'benchmark/sap/production-orders/100004750077.json');
      $this->measure("Production-Order (~150kb)", $ctrl, 'benchmark/sap/production-orders/100004750255.json');
      $this->measure("Production-Order (~280kb)", $ctrl, 'benchmark/sap/production-orders/100004755734.json');
    }


    public function measure($name, $ctrl, $file)
    {

      $data = json_decode(Storage::get($file), true);

      echo "Measure $name... ";
      $time_start = microtime(true);
      $request = new Request($data);
      $response = $ctrl->update($request);
      $time_end = microtime(true);
      $time = $time_end - $time_start;
      echo "\t$time"."s\n";
    }

}
