<?php

namespace App\Library\Helper;

use Auth;
use App\Language;

/**
 * native translation structure:   ['en' => 'Accura', \App\Language::DE => 'Accura']
 * sap translation structure:       [['Language' => 'en', 'Text' => 'Accura'],['Language' => \App\Language::DE, 'Text' => 'Accura'],['Language' => \App\Language::find(1), 'Text' => 'Accura']]
 */
class LanguageHelper {

    /**
     * Get one translation of translation array.
     *
     * @param array $exist The existing translation array
     * @param mixed $lang (optional) The required language -default: user->language -types: string, \App\Language
     * @return string
     */
    public static function get(array $exist, $language = null) {
        $key = self::toKey($language ?: Auth::user()->language);
        return array_key_exists($key, $exist) ? $exist[$key] : null;
    }

    /**
     * Set translation array (create & update).
     *     
     * @param array $new The additional translation array -structure: native translation structure, sap translation structure
     * @param mixed $exist (optional) The existing translation array -types: array, null
     * @return array
     */
    public static function set(array $new, $exist = array()) {
        foreach (self::cast($new) as $key => $value) {
            $exist[$key] = $value;
        }
        return $exist;
    }

    /**
     * Cast translation array into native structure
     * 
     * @param array $new The translation array -structure: native translation structure, sap translation structure
     * @return array
     */
    public static function cast(array $new) {
        foreach ($new as $key => $value) {
            $cast[self::getKey($key, $value)] = self::getValue($value);
        }
        return $cast;
    }

    private static function getKey($key, $value) {
        return self::toKey(self::isSap($value) ? $value['Language'] : $key);
    }

    private static function getValue($value) {
        return self::isSap($value) ? $value['Text'] : $value;
    }

    private static function isSap($param) {
        return is_array($param);
    }

    private static function toKey($param) {
        return strtolower($param instanceof Language ? $param->iso_code : $param);
    }

}
