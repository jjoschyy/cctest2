<?php

namespace App\Library;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class MenuGenerator {

    protected $menueArray;

    public function __construct() {
        foreach (DB::table('menues')->get() as $value) {
            if ($value->parent_id) {
                $this->menueArray[$value->parent_id]['submenu'][] = array(
                        'title' => $value->title,
                        'link' => URL::to($value->route)
                );
            } else {
                $this->menueArray[$value->id]['title'] = $value->title;
            }
        }
    }

    public function render($mArray = "ROOT") {
        $content = "";
        if ($mArray == "ROOT") {
            $mArray = $this->menueArray;
        }

        foreach ($mArray as $key => $value) {
            $subMenueList = array();
            if (isset($value['submenu'])) {
                foreach ($value['submenu'] as $subkey => $subvalue) {
                    $subMenueList[$subkey] = $subvalue['title'];
                }
                asort($subMenueList);
                $tempMenue = array();
                foreach ($subMenueList as $subkey => $subvalue) {
                    $tempMenue[] = array(
                            'title' => $subvalue,
                            'link' => $value['submenu'][$subkey]['link']
                    );
                }
                $mArray[$key]['submenu'] = $tempMenue;
            }
        }
        foreach ($mArray as $key => $value) {
            $href = (isset($value['link'])) ? $value['link'] : "#";
            if (isset($value['title'])) {
                if (isset($value['submenu'])) {
                    $content .= '<li class="nav-item dropdown">';
                    $content .= '<a href="' . $href . '" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink_' . $key . '" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' . $value['title'] . '</a>';
                    $content .= '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink_' . $key . '">';
                    $content .= $this->renderDropDownItems($value['submenu']);
                    $content .= '</div>';
                } else {
                    $content .= '<li class="nav-item">';
                    $content .= '<a href="' . $href . '" class="nav-link">' . $value['title'] . '</a>';
                }
            }
            $content .= '</li>';
        }
        return $content;
    }

    private function renderDropDownItems($mArray) {
        $content = "";
        foreach ($mArray as $value) {
            $content .= '<a  class="dropdown-item" href="' . $value['link'] . '">' . $value['title'] . '</a>';
        }
        return $content;
    }

}
