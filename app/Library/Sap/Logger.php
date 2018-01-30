<?php

namespace App\Library\Sap;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class Logger {

    public static function write(Request $request, Response $response, string $key = '') {
        $uri = $request->route() ? $request->route()->uri() : "[unknown uri]";
        if ($response->isSuccessful())
            Log::info("Request on endpoint '" . $uri . "' received: " . $request->input($key));
        else
            Log::error("Request on endpoint '" . $uri . "' failed: " . self::details($request, $response));
    }

    private static function details(Request $request, Response $response) {
        return json_encode(['Response' => $response->getOriginalContent(), 'Request' => $request->all()]);
    }

}
