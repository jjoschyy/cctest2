<?php

namespace App\Http\Requests\Sap;

use Illuminate\Database\Schema\Builder;

class Prodorder {

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public static function rules() {
        $length = Builder::$defaultStringLength;
        return [
                'ProductionOrder' => 'required|array',
                'ProductionOrder.OrderNumber' => 'required|string|digits:12',
                'ProductionOrder.OrderType' => 'required|string|size:4|alpha_num',
                'ProductionOrder.OrderCategory' => 'required|string|digits:2',
                'ProductionOrder.Plant' => 'required|string|digits:4',
                'ProductionOrder.BasicFinishDate' => 'required|string|size:10|date_format:Y-m-d',
                'ProductionOrder.BasicStartDate' => 'required|string|size:10|date_format:Y-m-d',
                'ProductionOrder.ScheduledFinishDate' => 'required|string|size:10|date_format:Y-m-d',
                'ProductionOrder.ScheduledStartDate' => 'required|string|size:10|date_format:Y-m-d',
                'ProductionOrder.Material' => 'required|string|size:15|regex: /[\d]{6}-[\d]{4}-[\d]{3}/',
                'ProductionOrder.MaterialTexts' => 'required|array|min:2',
                'ProductionOrder.MaterialTexts.*.Language' => 'required|string|size:2|alpha',
                'ProductionOrder.MaterialTexts.*.Text' => 'required|string|max:' . $length,
                'ProductionOrder.Items' => 'required|array|size:1',
                'ProductionOrder.Items.*.CustomerOrderNumber' => 'nullable|string|digits:10',
                'ProductionOrder.Items.*.CustomerOrderItemNumber' => 'nullable|string|digits:6',
                'ProductionOrder.Operations' => 'required|array',
                'ProductionOrder.Operations.*.OperationNumber' => 'required|string|digits:4',
                'ProductionOrder.Operations.*.RoutingNumber' => 'required|string|digits:10:',
                'ProductionOrder.Operations.*.GeneralCounter' => 'required|string|digits:8',
                'ProductionOrder.Operations.*.Version' => 'nullable|string|max:' . $length,
                'ProductionOrder.Operations.*.LatestScheduledDate' => 'required|string|size:10|date_format:Y-m-d',
                'ProductionOrder.Operations.*.WorkCenter' => 'required|string|alpha_dash|max:' . $length,
                'ProductionOrder.Operations.*.ControlKey' => 'required|string|size:4|alpha_num',
                'ProductionOrder.Operations.*.OperationShortText' => 'required|string|max:' . $length,
                'ProductionOrder.Operations.*.OperationLongText' => 'nullable|string',
                'ProductionOrder.Operations.*.SystemStatus' => 'nullable|string|regex: /^[A-Z\s]+$/i|max:' . $length,
                'ProductionOrder.Operations.*.ExternalItemIdentification' => 'nullable|string|digits:8',
                'ProductionOrder.Operations.*.CompletionConfirmationNumber' => 'required|string|digits:10',
                'ProductionOrder.Operations.*.SequenceNo' => 'required|string|digits:6',
                'ProductionOrder.Operations.*.StandardValue' => 'required|string|between:0,99999999.99',
                'ProductionOrder.Operations.*.StandardValueUnit' => 'nullable|string|max:' . $length,
                'ProductionOrder.Components' => 'required|array',
                'ProductionOrder.Components.*.ItemNumber' => 'required|string|digits:4',   
//                'ProductionOrder.Components.*.ItemCategory' => 'required|string|alpha|size:1',                
                'ProductionOrder.Components.*.Material' => 'nullable|string|size:15|regex: /[\d]{6}-[\d]{4}-[\d]{3}/',
                'ProductionOrder.Components.*.MaterialTexts' => 'required|array|min:2',
                'ProductionOrder.Components.*.MaterialTexts.*.Text' => 'required|string|max:' . $length,
                'ProductionOrder.Components.*.MaterialTexts.*.Language' => 'required|string|size:2|alpha',
                'ProductionOrder.Components.*.RequiredQuantity' => 'required|numeric|between:0,99999999.99',
                'ProductionOrder.Components.*.RequiredQuantityUnit' => 'required|string|alpha|max:' . $length,
                'ProductionOrder.Components.*.ConfirmedQuantity' => 'required|numeric|between:0,99999999.99',
                'ProductionOrder.Components.*.ConfirmedQuantityUnit' => 'required|string|alpha|max:' . $length,
                'ProductionOrder.Components.*.WithdrawnQuantity' => 'required|numeric|between:0,99999999.99',
                'ProductionOrder.Components.*.WithdrawnQuantityUnit' => 'required|string|alpha|max:' . $length,
                'ProductionOrder.Components.*.QuantityReserverationTime' => 'nullable|string|size:8|date_format:H:i:s',
                'ProductionOrder.Components.*.OrderLevel' => 'required|integer',
                'ProductionOrder.Components.*.OrderPath' => 'required|integer',
                'ProductionOrder.Components.*.BulkMaterial' => 'required|boolean',
                'ProductionOrder.Components.*.Backflush' => 'required|boolean',
                'ProductionOrder.Components.*.PhantomItem' => 'required|boolean',
                'ProductionOrder.Components.*.StorageLocation' => 'nullable|string|digits:4',
                'ProductionOrder.Components.*.OperationNumber' => 'required|string|digits:4',
                'ProductionOrder.Components.*.ExternalItemIdentification' => 'nullable|string|digits:8',
                'ProductionOrder.Components.*.SequenceNo' => 'required|string|digits:6',
//                'Documents' => 'required|array',
//                'Documents.*.OperationNumber' => 'nullable|string|digits:4',
//                'Documents.*.SequenceNo' => 'nullable|string|digits:6',
//                'Documents.*.DownloadId' => 'required|integer',
//                'Documents.*.Title' => 'required|string|max:' . $length,
//                'Documents.*.Name' => 'required|string|regex: /^[\w\.-]*$/|max:' . $length,
//                'Documents.*.Type' => 'required|string|alpha_num|max:' . $length,
//                'Documents.*.Language' => 'required|string|size:1|alpha',
//                'NSPs' => 'required|array',
//                'NSPs.*.OperationNumber' => 'nullable|string|digits:4',
//                'NSPs.*.SequenceNo' => 'nullable|string|digits:6',
//                'NSPs.*.Title' => 'required|string|max:' . $length,
//                'NSPs.*.Content' => 'required|string',
//                'NSPs.*.Documents' => 'required|array',
//                'NSPs.*.Documents.*.DownloadId' => 'required|integer',
//                'NSPs.*.Documents.*.Title' => 'required|string|max:' . $length,
//                'NSPs.*.Documents.*.Name' => 'required|string|regex: /^[\w\.-]*$/|max:' . $length,
//                'NSPs.*.Documents.*.Type' => 'required|string|alpha_num|max:' . $length,
//                'NSPs.*.Documents.*.Language' => 'required|string|size:1|alpha',
        ];
    }

}

/*
     * Sample Prodorder 2017-12-08
     */

//{
//    "ProductionOrder": {
//        "OrderNumber": "100004729224",
//        "OrderType": "N070",
//        "OrderCategory": "10",
//        "Plant": "1014",
//        "BasicFinishDate": "2017-12-06",
//        "BasicStartDate": "2017-12-05",
//        "ScheduledFinishDate": "2017-12-05",
//        "ScheduledStartDate": "2017-12-05",
//        "Material": "000000-1983-899",
//        "Items": [
//            {
//                "ItemNumber": "0001",
//                "CustomerOrderNumber": "1027419721",
//                "CustomerOrderItemNumber": "000250",
//                "SerialNumber": null,
//                "CustomerNumber": "0001864440",
//                "CustomerName": "Limited Liability Company â€œIECâ€�",
//                "CustomerCity": "Ekaterinburg"
//            }
//        ],
//        "MaterialTexts": [
//            {
//                "Language": "DE",
//                "Text": "Datensystem, konfigurierbar"
//            },
//            {
//                "Language": "EN",
//                "Text": "Data system, configurable"
//            }
//        ],
//        "Operations": [
//            {
//                "OperationNumber": "0010",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000001",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7020B",
//                "ControlKey": "ZO01",
//                "OperationShortText": "Materialbereitstellung Datensysteme",
//                "OperationLongText": null,
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000024",
//                "CompletionConfirmationNumber": "0071245600",
//                "SequenceNo": "000000",
//                "StandardValue": "0.000 ",
//                "StandardValueUnit": null
//            },
//            {
//                "OperationNumber": "0100",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000002",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Service Information",
//                "OperationLongText": "Service Information\r\n\r\nFollowing information are for the service technician\r\n\r\nInstallation date: _____________________________________________\r\n\r\nCMM Type:___________________  Customer Order:___________________\r\n\r\nCMM Serial Number:______________________________________________\r\n\r\nO Installation of Operating System:_____________________________\r\n\r\n________________________________________________________________\r\n\r\nO Acceptance test of software\r\n\r\nO Checked completeness of sales order\r\n\r\nO Viral Scan done; Report archived\r\n\r\nO Backup done\r\n\r\nComments:\r\n\r\n________________________________________________________________\r\n\r\n________________________________________________________________\r\n\r\n\r\nDepartement IMT-OMSW // 07364 / 20 - 3833\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000025",
//                "CompletionConfirmationNumber": "0071245601",
//                "SequenceNo": "000000",
//                "StandardValue": "1.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "0200",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000003",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Hardwareinstallation",
//                "OperationLongText": "Hardwareinstallation\r\n\r\n%IT:CB1% Material vollstÃ¤ndig\r\n%IT:CB2% Hardwareaufbau Rechner, Drucker, Monitor / In Ordnung\r\n%INP:Monitor Seriennummer%\r\nWurden Karten zusÃ¤tzlich eingebaut? %RADIO:ZusÃ¤tzliche Karten%\r\n%COND:ZusÃ¤tzliche Karten==1%\r\n%INP:Eingebaute Karten%\r\n%ENDCOND%\r\n%INP:PC Seriennummer%\r\n%IT:CB3% Support-Aufkleber\r\n%IT:CB4% CMM-Aufkleber\r\n%IT:CB5% Seriennummer-Aufkleber\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000026",
//                "CompletionConfirmationNumber": "0071245602",
//                "SequenceNo": "000000",
//                "StandardValue": "15.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "9900",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000004",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7480_0T",
//                "ControlKey": "ZO29",
//                "OperationShortText": "FERTIGE TEILE LIEFERN",
//                "OperationLongText": null,
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000034",
//                "CompletionConfirmationNumber": "0071245603",
//                "SequenceNo": "000000",
//                "StandardValue": "0.000 ",
//                "StandardValueUnit": null
//            },
//            {
//                "OperationNumber": "0300",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000005",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Betriebssysteminstallation",
//                "OperationLongText": "Betriebssysteminstallation\r\n\r\nFolgendes Betriebssystem wurde installiert\r\n%COMBO:checklist_operating_system%\r\n%IT:CB1% Fehlende Treiber installiert\r\n%IT:CB2% Windows aktiviert\r\n%IT:CB3% Festplattenname angepasst\r\n%IT:CB4% Computername angepasst\r\n%IT:CB5% Sprache angepasst\r\n%INP:Eingestelle Sprache%\r\n%IT:CB6% Datum / Uhrzeit angepasst\r\n%IT:CB7% Laufwerksbuchstabe kontrolliert\r\nWurde der Virenscan vor dem Verpacken durchgefÃ¼hrt? %RADIO:Virenscan%\r\n%COND:Virenscan==1%\r\n%IT:CB8% Prot. Archieviert\r\n%IT:CB9% Virenscan-Aufkleber\r\n%ENDCOND%\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000035",
//                "CompletionConfirmationNumber": "0071245604",
//                "SequenceNo": "000000",
//                "StandardValue": "15.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "0700",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000006",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Softwarelizenzierung",
//                "OperationLongText": "Softwarelizenzierung\r\nFolgende Software wurde lizensiert\r\nSoftwarelizenzierung\r\nFolgende Software wurde lizensiert\r\n%REPEAT:SWLic:Softwarelizensierung entfernen%\r\n%COMBO:LicSW:software%\r\n%ENDREPEAT:SWLic:Softwarelizensierung hinzufÃ¼gen%\r\n%IT:SW_komplett% Softwarelieferung (USB-Stick) auf VollstÃ¤ndigkeit prÃ¼fen\r\n\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000039",
//                "CompletionConfirmationNumber": "0071245605",
//                "SequenceNo": "000000",
//                "StandardValue": "15.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "2799",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000007",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Datenpflege",
//                "OperationLongText": "Datenpflege\r\n%IT:CB1% Seriennummern im SAP gepflegt\r\n%IT:CB2% CAS/CRM iBase geprÃ¼ft und ergÃ¤nzt\r\n\r\nUSB Stick fÃ¼llen\r\n\r\n%FILE:PrÃ¼fschein%\r\n%FILE:CAA-Daten%\r\n%FILE:Zertifikat%\r\n%BTN:DatenSystemExport%\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000040",
//                "CompletionConfirmationNumber": "0071245606",
//                "SequenceNo": "000000",
//                "StandardValue": "20.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "0900",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000008",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Caylpso/CMM-OS",
//                "OperationLongText": "Caylpso/CMM-OS\r\nFolgende Software wurde installiert\r\n%REPEAT:Software entfernen%\r\n%COMBO:CMM-OS:checklist_software%/%COMBO:CMM-OS_V:checklist_software_version:CMM-OS%/%COMBO:CMM-OS_P:checklist_software_version_servicepack:CMM-OS_V%\r\n%ENDREPEAT:Software hinzufÃ¼gen%\r\n%IT:CB1% Aktuelle PrÃ¼fplÃ¤ne und Techservice installiert\r\n%IT:CB2% Maschine konfiguriert\r\n%IT:CB3% Testblock geladen\r\n%IT:CB1% Einmesskugeldaten geprÃ¼ft\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000041",
//                "CompletionConfirmationNumber": "0071245607",
//                "SequenceNo": "000000",
//                "StandardValue": "10.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "1300",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000009",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO21",
//                "OperationShortText": "Andere Software",
//                "OperationLongText": "Andere Software\r\nMuss zusÃ¤tzliche Software installiert werden? %RADIO:ZusSoftware%\r\n%COND:ZusSoftware==1% Folgende Software wurde installiert\r\n%REPEAT:SWZus:Software entfernen%\r\n%COMBO:ZusSW:checklist_software% / %COMBO:ZusSW_V:checklist_software_version:ZSW% / %COMBO:ZusSW_P:software_version_servicepack:ZusSW_V%\r\n%ENDREPEAT:SWZus:Software hinzufÃ¼gen%\r\n%IT:ZusLiz% FÃ¼r mehrere zusÃ¤tzliche Software Lizenzierung durchgefÃ¼hrt\r\n%ENDCOND%\r\n\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000045",
//                "CompletionConfirmationNumber": "0071245608",
//                "SequenceNo": "000000",
//                "StandardValue": "10.000 ",
//                "StandardValueUnit": "MIN"
//            },
//            {
//                "OperationNumber": "2800",
//                "RoutingNumber": "0005753680",
//                "GeneralCounter": "00000010",
//                "Version": null,
//                "LatestScheduledDate": "2017-12-05",
//                "WorkCenter": "7450",
//                "ControlKey": "ZO11",
//                "OperationShortText": "4-Augenprinzip",
//                "OperationLongText": "4-Augenprinzip\r\nSystemtest am Kunden-PC\r\nGegenkontrolle durch 4 -Augenprinzip\r\n\r\n%IT:CB1% Visuelle Kontrolle des Kunden-PC's\r\n%IT2:CB1.1% Hardware - VollstÃ¤ndigkeit nach Kundenauftrag geprÃ¼ft\r\n%IT2:CB1.2% Aufkleber auf dem Kunden-PC Ã¼berprÃ¼ft\r\n%IT2:CB1.3% Supportaufkleber\r\n%IT2:CB1.4% Netzwerkkartenaufkleber\r\n%IT2:CB1.5% Software auf dem Kunden-PC installiert\r\n%IT2:CB1.6% Lizenzen auf dem Kunden-PC freigeschaltet\r\n\r\n%IT:CB2% SoftwareprÃ¼fung des Kunden-PC's\r\n%IT2:CB2.1% Teleservice auf dem Desktop des Kunden-PC abgelegt\r\n%IT2:CB2.2% Netzwerkkarten konfiguriert\r\n%IT2:CB2.3% Zeiss-CMM   IP 192.4.1.55 Subnetmask    255.255.255.0\r\n%IT2:CB2.4% GerÃ¤te-Manager auf fehlende Treiber Ã¼berprÃ¼ft\r\n%IT2:CB2.5% Backup durchgefÃ¼hrt / falls bestellt\r\n%IT2:CB2.6% Software-Konfiguration nach CAS/CRM-Daten geprÃ¼ft (auÃŸer            bei      MultistÃ¤nderanlagen)\r\n%IT2:CB2.7% Parkposition der Maschine eingetragen\r\n%IT2:CB2.8% Messbereich der Maschine eingetragen\r\n%IT2:CB2.9% Messkopf ausgewÃ¤hlt\r\n%IT2:CB2.10% Drehtisch gewÃ¤hlt & frei geschaltet / falls bestellt\r\n%IT2:CB2.11% Bedienpult ausgewÃ¤hlt\r\n%IT2:CB2.12% Temperaturkoeffizient nach KMG-Typ eingetragen\r\n%IT2:CB2.13% Seriennummer der Einmesskugel eingetragen\r\n%IT2:CB2.14% Radius der Einmesskugel eingetragen\r\n%IT2:CB2.15% Rundheitsabweichung der Einmesskugel eingetragen\r\n\r\n%IT:CB3% PrÃ¼fung am eigenen Arbeitsplatz-PC\r\n%IT2:CB3.1% CAS/CRM Datenpflege geprÃ¼ft\r\n%IT2:CB3.2% Kundendaten geprÃ¼ft\r\n%IT2:CB3.3% VollstÃ¤ndigkeit der Komponenten\r\n\r\n\r\n\r\n",
//                "SystemStatus": "DRUC FREI",
//                "ExternalItemIdentification": "00000055",
//                "CompletionConfirmationNumber": "0071245609",
//                "SequenceNo": "000000",
//                "StandardValue": "5.000 ",
//                "StandardValueUnit": "MIN"
//            }
//        ],
//        "Components": [
//            {
//                "ItemNumber": "3003",
//                "Material": "660002-0602-300",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO Curve PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO Curve PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005704",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3030",
//                "Material": "660002-0602-301",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO PCM PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO PCM PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005705",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3004",
//                "Material": "660002-0602-100",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO IGES IN/OUT PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO IGES IN/OUT PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005706",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3008",
//                "Material": "660002-0602-104",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO ParaSolid IN/OUT PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO ParaSolid IN/OUT PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005710",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3018",
//                "Material": "660002-0602-303",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO Free Form PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO Free Form PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005720",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3033",
//                "Material": "660002-0602-113",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO DMIS CNC OUT PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO DMIS CNC OUT PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005724",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3034",
//                "Material": "660002-0602-307",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO DMIS CNC IN PC Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO DMIS CNC IN PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005725",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "3042",
//                "Material": "660002-0602-017",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO PiWeb report plus Basis PC Liz"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO PiWeb report plus Base PC Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005732",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "1328",
//                "Material": "660002-0602-602",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "CALYPSO VAST navigator SW Set PC-Lic"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "CALYPSO VAST navigator SW Set PC-Lic"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 0,
//                "OrderPath": 0,
//                "BulkMaterial": true,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00005504",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "0081",
//                "Material": "614303-0000-400",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "PERFORMANCE Workstation"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "PERFORMANCE Workstation"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 0.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 1,
//                "OrderPath": 1,
//                "BulkMaterial": false,
//                "Backflush": false,
//                "PhantomItem": true,
//                "StorageLocation": null,
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00007022",
//                "SequenceNo": "000000"
//            },
//            {
//                "ItemNumber": "0030",
//                "Material": "614303-9089-003",
//                "MaterialTexts": [
//                    {
//                        "Language": "DE",
//                        "Text": "Workstation Z440 G4 HP"
//                    },
//                    {
//                        "Language": "EN",
//                        "Text": "Workstation Z440 G4 HP"
//                    }
//                ],
//                "RequiredQuantity": 1.0,
//                "RequiredQuantityUnit": "ST",
//                "ConfirmedQuantity": 0.0,
//                "ConfirmedQuantityUnit": "ST",
//                "WithdrawnQuantity": 1.0,
//                "WithdrawnQuantityUnit": "ST",
//                "QuantityReserverationTime": "12:45:58",
//                "OrderLevel": 1,
//                "OrderPath": 1,
//                "BulkMaterial": false,
//                "Backflush": false,
//                "PhantomItem": false,
//                "StorageLocation": "1000",
//                "OperationNumber": "0010",
//                "ExternalItemIdentification": "00000003",
//                "SequenceNo": "000000"
//            }
//        ]
//    },
//    "Documents": [{
//            "OperationNumber": null,
//            "SequenceNo": null,
//            "DownloadId": 12345,
//            "Title": "Testdokument",
//            "Name": "620500-7035-002-01_FUM-001-08.pdf",
//            "Type": "PDF",
//            "Language": "D"
//        }],
//
//    "NSPs": [{
//            "OperationNumber": null,
//            "SequenceNo": null,
//            "Title": "Sensorik ACCURA 16/42/15 mit zusÃ¤tzlichem VAST XXT TL4",
//            "Content": "{HTML_CONTENT}",
//            "Documents": [{
//                    "DownloadId": 12345,
//                    "Title": "Testdokument1",
//                    "Name": "NSP-Doc1.pdf",
//                    "Type": "PDF",
//                    "Language": "D"
//                }, {
//                    "DownloadId": 33333,
//                    "Title": "Testdokument2",
//                    "Name": "NSP-Doc2.jpg",
//                    "Type": "JPG",
//                    "Language": "D"
//                }]
//        }
//    ]
//}
