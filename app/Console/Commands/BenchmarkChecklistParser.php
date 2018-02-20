<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Library\Checklist\Parser;

class BenchmarkChecklistParser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'benchmark:checklist-parser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Benchmark parsing of sample checklists';

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
      $this->measure("Mixed text (~10kb) ", 'benchmark/sap/checklist/MIXED1.txt');
      $this->measure("Mixed text (~100kb)", 'benchmark/sap/checklist/MIXED2.txt');
      return "OK";
    }

    public function measure($name, $file)
    {

        $data = Storage::get($file);

        echo "Measure $name... ";
        $time_start = microtime(true);
        $parser = new Parser();
        $parser->parse($data);

        $time_end = microtime(true);
        $time = $time_end - $time_start;
        $msg  = $parser->hasNoError() ? 'OK' : 'FAILED';
        echo "[".$msg."]\t$time"."s\n";
      }

}
