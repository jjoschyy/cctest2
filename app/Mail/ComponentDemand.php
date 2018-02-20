<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ComponentDemand extends Mailable {

    use Queueable;
    use SerializesModels;

    public $locale;
    public $content;
    private $prodorder;
    private $component;

    // temporary solution - later administration of receiver via database table
    const RECEIVER = [
            1 => [132, 199, 126, 117, 843],
            3 => [],
    ];
    const TEXT = [
            'de' => [
                    'Subject' => 'Material %s in Fertigungsauftrag %s nicht angelegt',
                    'Content' => 'Hallo Empfänger, das Material "%s %s" wurde im Fertigungsauftrag %s und Kundenauftrag %s nicht angelegt. Bitte eine entsprechende Change Notice starten. Der Fertigungsauftrag wird aktuell von Mitarbeiter %s bearbeitet.',
            ],
            'en' => [
                    'Subject' => 'Material %s in Production Order %s missing',
                    'Content' => '',
            ],
    ];

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($component) {
        $this->component = $component;
        $this->prodorder = $this->component->getProdorder();
        $this->locale = $this->prodorder->location->language->iso_code;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        $this->renderReceiver();
        $this->renderSubject();
        $this->renderContent();
        return $this->view('emails.default');
    }

    private function renderReceiver() {
        foreach ($this::RECEIVER[$this->prodorder->location->id] as $receiverId)
            $this->to(User::find($receiverId)->email);
    }

    private function renderSubject() {
        $this->subject(sprintf($this::TEXT[$this->locale]['Subject'], $this->component->getMaterial(), $this->prodorder->prodorder_number));
    }

    private function renderContent() {
        $salesorderNumber = $this->prodorder->salesorder ? $this->prodorder->salesorder->salesorder_number : '';
        $userFullName = $this->component->prodorderOperation->user ? $this->component->prodorderOperation->user->getFullName() : '';
        $this->content = sprintf($this::TEXT[$this->locale]['Content'], $this->component->getMaterial(), $this->component->getMaterialText($this->locale), $this->prodorder->prodorder_number, $salesorderNumber, $userFullName);
    }

}
