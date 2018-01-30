<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use \App\Library\Checklist\Parser;


class ParserTest extends TestCase {
    use RefreshDatabase;


    public function testTypeText()
    {
        $this->assertItem("DUMMY-TEXT", [
          'type'           => Parser::ITT_TEXT,
          'label'          => "DUMMY-TEXT",
          'name'           => null,
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testTypeIt()
    {
        $this->assertItem("%IT:CB1% Anbauteile anbringen", [
          'type'           => Parser::ITT_IT,
          'label'          => "Anbauteile anbringen",
          'name'           => "CB1",
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => true,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => true,
        ]);
    }


    public function testTypeIt2()
    {
        $this->assertItem("%IT2:CB1% Anbauteile anbringen", [
          'type'           => Parser::ITT_IT2,
          'label'          => "Anbauteile anbringen",
          'name'           => "CB1",
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => true,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => true,
        ]);
    }


    public function testTypeRef()
    {
        $this->assertItem("%REF:REF_NAME:File.pdf%", [
          'type'           => Parser::ITT_REF,
          'label'          => null,
          'name'           => "REF_NAME",
          'option1'        => "File.pdf",
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => true,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testInvalidTypeRef()
    {
        $this->assertInvalidItem(
          "%REF:File.pdf%",
          "Parsing of %REF:File.pdf% failed. Params count must be 2."
        );
    }


    public function testTypeInp()
    {
        $this->assertItem("%INP:Testarea%", [
          'type'           => Parser::ITT_INP,
          'label'          => "Testarea",
          'name'           => "Testarea",
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => true,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testTypeMw()
    {
        $this->assertItem("%MW:Repro:f:-21<Repro&&Repro<21:BUTTON-TEXT%", [
          'type'           => Parser::ITT_MW,
          'label'          => null,
          'name'           => "Repro",
          'option1'        => 'f',
          'option2'        => '-21<Repro&&Repro<21',
          'option3'        => 'BUTTON-TEXT',
          'isCalcRelevant' => true,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testInvalidTypeMw()
    {
        $this->assertInvalidItem(
          "%MW:XXX%",
          "Parsing of %MW:XXX% failed. Params count must be 4."
        );

        $this->assertInvalidItem(
          "%MW:Repro:x:-21<Repro&&Repro<21:EXECUTE%",
          "Parsing of %MW:Repro:x:-21<Repro&&Repro<21:EXECUTE% failed. Unsupported param: [x]."
        );
    }


    public function testMailTo()
    {
        $this->assertItem("%MAILTO:nsp.imt.de@zeiss.com%", [
          'type'           => Parser::ITT_MAILTO,
          'label'          => "nsp.imt.de@zeiss.com",
          'name'           => null,
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testHttp()
    {
        $this->assertItem("%HTTP:www.google.de%", [
          'type'           => Parser::ITT_HTTP,
          'label'          => "www.google.de",
          'name'           => null,
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testHttps()
    {
        $this->assertItem("%HTTPS:www.google.de%", [
          'type'           => Parser::ITT_HTTPS,
          'label'          => "www.google.de",
          'name'           => null,
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testBtn()
    {
        $this->assertItem("%BTN:EXPORT:DatenSystemExport%", [
          'type'           => Parser::ITT_BTN,
          'label'          => null,
          'name'           => "EXPORT",
          'option1'        => "DatenSystemExport",
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }


    public function testFile()
    {
        $this->assertItem("%FILE:Download me%", [
          'type'           => Parser::ITT_FILE,
          'label'          => null,
          'name'           => "Download me",
          'option1'        => null,
          'option2'        => null,
          'option3'        => null,
          'isCalcRelevant' => false,
          'isNewGroup'     => true,
          'isVisible'      => true,
          'usedPostText'   => false,
        ]);
    }

    public function testStoreItems()
    {
      $parser = new Parser();
      $parser->parse("Simple Text");
      $parser->storeItems(1);

      $this->assertDatabaseHas('prodorder_checklists', [
        'prodorder_operation_id'  => '1',
        'type'                    => 'TEXT',
        'label'                   => 'Simple Text',
        'is_new_group'            => true,
        'is_active'               => true
      ]);
    }


   public function testGetRecords()
   {
     $parser = new Parser();
     $parser->parse("Simple Text");
     $this->assertEquals(1, count($parser->getRecords(1)));
   }


   private function assertItem($str, $opts)
   {
      $parser = new Parser();
      $parser->parse($str);

      $this->assertTrue($parser->hasNoError());
      $this->assertEquals(1, $parser->itemCount());

      $item = $parser->getItem(0);
      $this->assertEquals($opts['type'], $item->type);
      $this->assertEquals($opts['label'], $item->label);
      $this->assertEquals($opts['name'], $item->name);
      $this->assertEquals($opts['option1'], $item->option1);
      $this->assertEquals($opts['option2'], $item->option2);
      $this->assertEquals($opts['option3'], $item->option3);
      $this->assertEquals($opts['isCalcRelevant'], $item->isCalcRelevant);
      $this->assertEquals($opts['isNewGroup'], $item->isNewGroup);
      $this->assertEquals($opts['isVisible'], $item->isVisible);
      $this->assertEquals($opts['usedPostText'], $item->usedPostText);
  }


  private function assertInvalidItem($str, $errorMessage)
  {
     $parser = new Parser();
     $parser->parse($str);
     $this->assertEquals($errorMessage, $parser->getErrorMessage());
  }


}
