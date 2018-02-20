<?php

namespace App\Library\Helper;

use App\Location;

class LocationHelper {

    /**
     * Check if location list contains passed location which means permission
     * 
     * @param array $exist The existing location id list array
     * @param mixed $location The location to check -types: integer, \App\Location, array(integer), array(\App\Location)
     * @return boolean
     */
    public static function check(array $exist, $location) {
        $result = true;
        foreach (self::cast($location) as $value) {
            $result = $result && in_array($value, $exist);
        }
        return $result;
    }

    /**
     * Cast location parameter to standard structure
     * 
     * @param mixed $location The location to check -types: integer, \App\Location, array(integer), array(\App\Location)
     * @return array(integer)
     */
    public static function cast($location) {
        foreach (self::toArray($location) as $value) {
            $cast[] = self::toId($value);
        }
        return array_unique($cast);
    }

    private static function toArray($param) {
        return is_array($param) ? $param : [$param];
    }

    private static function toId($param) {
        return $param instanceof Location ? $param->id : $param;
    }

}
