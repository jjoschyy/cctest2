<?php

namespace App\Library\Email;

use Mail;
use \Illuminate\Http\Request;
use App\Prodorder;
use App\User;
use App;
use Exception;

/**
 * Description of OrderMaterialEmailManager TODO
 *
 */
class OrderMaterialEmailManager {

    /**
     * Send an E-mail info to the administrators.
     *
     * @param  Request  $request
     * @param  Prodorder  $product
     * @param  User  $user
     * 
     * @return string $statusMessage
     */
    public function sendEmailOrderMaterial(Request $request, Prodorder $product, User $user) {
        App::setLocale('de');  // set language E-Mail for receivers
        // $emails = ['theresa.rief@zeiss.com', 'thomas.eisemann@zeiss.com','andrea.stoelzle@zeiss.com','kathrin.gold@zeiss.com','catalin.stanciu@zeiss.com'];
        // TODO => replace after testing
        $emailsTest = ['Igor.Zec@comlineag.de', 'Lasse.Ehlerding@comlineag.de'];
        try {
            Mail::send('go.board.emails.order-material', ['user' => $user, 'product' => $product, 'request' => $request], function ($message) use ($emailsTest) {
                $message->from('no-reply@production-board.com', __('go.noReply') . ' - Production Board Go');
                $message->to($emailsTest)->subject(__('go.materialNotCreatedInSAP'));
            });
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
        if (count(Mail::failures()) > 0) {
            $statusMessage = "There was one or more failures: <br>";
            foreach (Mail::failures as $email_address) {
                $statusMessage .= " - $email_address <br>";
            }
        } else {
            $statusMessage = "OK, no errors in 'Order material E-mail', all sent successfully!";
        }
        return $statusMessage;
    }
}
