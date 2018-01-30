<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TokenTest extends TestCase
{

    public function testTextToken()
    {
        $token = new \App\Library\Checklist\Token("Test-Text");
        $this->assertEquals("TEXT", $token->getType());
        $this->assertEquals("Test-Text", $token->getConfig());
        $this->assertFalse($token->isLineBreak());
        $this->assertFalse($token->isFunction());
        $this->assertTrue($token->isValid());
    }

    public function testLinebreakToken()
    {
        $token = new \App\Library\Checklist\Token("\n");
        $this->assertNull($token->getType());
        $this->assertNull($token->getConfig());
        $this->assertTrue($token->isLineBreak());
        $this->assertFalse($token->isFunction());
        $this->assertTrue($token ->isValid());
    }

    public function testValidFunctionToken()
    {
        $token = new \App\Library\Checklist\Token("%IT:ABCDE%");
        $this->assertEquals("IT", $token->getType());
        $this->assertEquals("ABCDE", $token->getConfig());
        $this->assertFalse($token->isLineBreak());
        $this->assertTrue($token->isFunction());
        $this->assertTrue($token->isValid());
    }


    public function testInvalidFunctionToken()
    {
        $token = new \App\Library\Checklist\Token("%ITABCDE%");
        $this->assertNull($token->getType());
        $this->assertNull($token->getConfig());
        $this->assertFalse($token->isLineBreak());
        $this->assertTrue($token->isFunction());
        $this->assertFalse($token->isValid());
    }

}
