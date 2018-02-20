<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IframeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $src = $request->input('src');
        return view('iframe', ['src' => $src, 'hideBreadcrumb' => true, 'include_js' => ['iframe/resize.js']]);
    }
}
