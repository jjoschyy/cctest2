<?php

namespace App\Library\Helper;

use Auth;
use App\Language;

/**
 * native translation structure:   ['en' => 'Accura', Language::DE => 'Accura']
 * sap translation structure:       [['Language' => 'en', 'Text' => 'Accura'],['Language' => Language::DE, 'Text' => 'Accura'],['Language' => Language::find(1), 'Text' => 'Accura']]
 */
class LanguageHelper {

    /**
     * Get one translation of translation array.
     *
     * @param array $exist The existing translation array
     * @param mixed $language (optional) The required language -default: user->language -types: string, object(Language)
     * @return string
     */
    public static function get(array $exist, $language = null) {
        $key = self::detectKey($language);
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
            $cast[self::key($key, $value)] = self::value($value);
        }
        return $cast;
    }

    /**
     * Get language file
     *
     * @param string $filename The filename of the required language file
     * @param mixed $language (optional) The required language -default: user->language -types: string, object(Language)
     * @return array
     */
    public static function langFile($filename, $language = null, $suffix = '') {
        return include sprintf('../resources/lang/%s/%s%s.php', self::detectKey($language), $filename, $suffix);
    }

    /**
     * Get language file for JS
     *
     * @param string $filename The filename of the required language file
     * @param mixed $language (optional) The required language -default: user->language -types: string, object(Language)
     * @return json
     */
    public static function langFileJs($filename, $language = null) {
        return str_replace('\"', "&quot;", json_encode(self::langFile($filename, $language, '_js')));
    }

    private static function key($key, $value) {
        return self::toKey(self::isSap($value) ? $value['Language'] : $key);
    }

    private static function value($value) {
        return self::isSap($value) ? $value['Text'] : $value;
    }

    private static function isSap($param) {
        return is_array($param);
    }

    private static function toKey($param) {
        return strtolower($param instanceof Language ? $param->iso_code : $param);
    }

    private static function detectKey($param) {
        return self::toKey($param ?: Auth::user()->language);
    }

}
