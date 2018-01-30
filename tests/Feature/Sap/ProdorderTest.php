<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;


class ProdorderTest extends TestCase {
    use RefreshDatabase;

    public function testSuccess(){
        $testData1 = json_decode(Storage::get('testing/sap/production-orders/success/100004708280.json'), true);
        $response1 = $this->json('PUT', '/sap/production-orders', $testData1);
        $response1->assertSuccessful();


        $this->assertDatabaseHas('prodorders', [
          'product_type_id'       => '1',
          'prodorder_number'      => '100004708280',
          'order_type'            => 'N070',
          'order_category'        => '10',
          'basic_finish_date'     => '2017-11-22',
          'basic_start_date'      => '2017-11-08',
          'scheduled_finish_date' => '2018-01-17',
          'scheduled_start_date'  => '2017-11-08'
        ]);


        $this->assertDatabaseHas('prodorder_operations', [
          'prodorder_id'                   => '1',
          'prodorder_operation_step_id'    => '1',
          'routing_number'                 => '0005727569',
          'general_counter'                => '00000001',
          'latest_scheduled_date'          => '2017-11-08',
          'work_center'                    => '7051B',
          'control_key'                    => 'ZO01',
          'system_status'                  => 'EROF',
          'external_item_identification'   => '00000001',
          'completion_confirmation_number' => '0070840555'
        ]);


        $this->assertDatabaseHas('prodorder_operations', [
          'prodorder_id'                  => '1',
          'prodorder_operation_step_id'   => '2',
          'routing_number'                 => '0005727569',
          'general_counter'                => '00000002',
          'latest_scheduled_date'          => '2018-01-17',
          'work_center'                    => '7480',
          'control_key'                    => 'ZO29',
          'system_status'                  => 'EROF',
          'external_item_identification'   => '00000002',
          'completion_confirmation_number' => '0070840556'
        ]);


        $this->assertDatabaseHas('prodorder_operation_steps', [
          'sequence_number'      => '000000',
          'operation_number'     => '0001',
          'operation_short_text' => 'Materialbereitstellung Bochingen'
        ]);


        $this->assertDatabaseHas('prodorder_components', [
          'prodorder_id'                  => '1',
          'prodorder_component_text_id'   => '1',
          'prodorder_operation_id'        => '1',
          'item_number'                   => '0045',
          'required_quantity'             => '1.0',
          'required_quantity_unit'        => 'ST',
          'confirmed_quantity'            => '1.0',
          'confirmed_quantity_unit'       => 'ST',
          'withdrawn_quantity'            => '0.0',
          'withdrawn_quantity_unit'       => 'ST',
          'quantity_reservation_time'     => '07:00:00',
          'order_level'                   => '0',
          'order_path'                    => '0',
          'bulk_material'                 => '0',
          'backflush'                     => '0',
          'phantom_item'                  => '0',
          'storage_location'              => '1350',
          'external_item_identification'  => '00000045',
         ]);


        $this->assertDatabaseHas('prodorder_component_texts', [
          //'material'      => '636002-9363-002',
          'material_text' => '{"de":"FS-PRO T  L-6000 MB-5200 -LK-","en":"Guideway PRO T  L-6000 MR-5200  -HC-"}'
        ]);
    }
}
