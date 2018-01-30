<?php

namespace App\Library\Helper;

class TimeHelper {

    /**
     * Transform date interval from unixtime to datetime 
     * 
     * @param int $unixtime The date interval as unixtime
     * @return DateInterval The formatted date interval as datetime
     */
    public static function timestampToTime(int $unixtime) {
        $datetime = new \DateTime();
        $interval = $datetime->add(new \DateInterval('PT' . $unixtime . 'S'))->diff(new \DateTime());
        return $interval->format('%Y-%M-%D %H:%I:%S');
    }

}
